// @flow
import React, { useState, useEffect } from 'react'
import {
  View, Text, Image, StyleSheet, Platform, StatusBar, BackHandler, TouchableWithoutFeedback,
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SharedElement } from 'react-navigation-shared-element'
import { PanGestureHandler, State } from 'react-native-gesture-handler'
import Animated, {
  and, block, call, color, cond, eq, Extrapolate, greaterOrEq,
  greaterThan, interpolate, lessOrEq, neq, or, set, useCode,
} from 'react-native-reanimated'
import {
  onGestureEvent, timing, useValues,
} from 'react-native-redash'
import { useMemoOne } from 'use-memo-one'
import { px } from '../../helpers/Dimensions'
import { Styles } from '../../constants'
import styles from './styles'

Card.sharedElements = (route) => route.params?.sharedElements

export default function Card() {
  const [
    scrollOffset, direction, x, y, translationY, translate, translationX, snapBack, state,
  ] = useValues([-px(260), 0, 0, 0, 0, 0, 0, 0, State.UNDETERMINED], [])
  const gestureHandler = useMemoOne(
    () => onGestureEvent({
      x, y, translationX, translationY, state,
    }),
    [state, translationY, translationX, x, y],
  )
  const [backEnabled, setBackEnabled] = useState(false)
  const navigation = useNavigation()
  const route = useRoute()

  let goBack = false

  useEffect(() => {
    setTimeout(() => setBackEnabled(true), 500)
  }, [])

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => !backEnabled)
    return () => backHandler.remove()
  }, [backEnabled])

  const backCallback = () => {
    if (!goBack) {
      goBack = true
      navigation.navigate('Home')
    }
  }

  useCode(
    () => block([
      cond(
        and(eq(state, State.BEGAN)),
        cond(
          or(lessOrEq(x, px(50)), lessOrEq(y, px(260))),
          set(direction, cond(greaterThan(x, px(50)), 0.5, 1)),
          set(direction, 0),
        ),
      ),
      cond(
        neq(direction, 0),
        [
          cond(
            and(
              greaterOrEq(cond(eq(direction, 1), translationX, translationY), px(180)),
              eq(snapBack, 0),
            ),
            set(snapBack, 1),
          ),
          cond(
            snapBack,
            call([], backCallback),
            cond(
              eq(state, State.END),
              set(translate, timing({
                from: cond(eq(direction, 1), translationX, translationY),
                to: 0,
                duration: 100,
              })),
              set(translate, cond(eq(direction, 1), translationX, translationY)),
            ),
          ),
        ],
      ),
    ]),
    [],
  )

  return (
    <View style={styles.substrate}>
      <StatusBar barStyle="light-content" hidden={Platform.OS === 'ios'} />
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          style={[
            styles.container,
            {
              transform: [{
                scale: interpolate(translate, {
                  inputRange: [0, px(160), px(161)],
                  outputRange: [1, 0.9, 0.9],
                  extrapolate: Extrapolate.CLAMP,
                }),
                translateY: interpolate(translate, {
                  inputRange: [0, px(160), px(161)],
                  outputRange: [0, px(50), px(50)],
                  extrapolate: Extrapolate.CLAMP,
                }),
              }],
            },
          ]}
        >
          <TouchableWithoutFeedback
            onPress={() => {
              setBackEnabled(false)
              navigation.goBack()
            }}
          >
            <Animated.View
              style={[
                styles.backButton,
                {
                  backgroundColor: cond(
                    greaterOrEq(scrollOffset, -px(40)),
                    color(0, 0, 0, 0.8),
                    color(255, 255, 255, 0.8),
                  ),
                },
                {
                  opacity: interpolate(translate, {
                    inputRange: [0, px(160), px(160) + 1],
                    outputRange: backEnabled ? [1, 0.5, 0] : [0, 0, 0],
                  }),
                },
              ]}
            >
              <Animated.Text
                style={{
                  color: cond(
                    greaterOrEq(scrollOffset, -px(40)),
                    color(255, 255, 255),
                    color(0, 0, 0),
                  ),
                }}
              >
                <AntDesign name="close" size={px(24)} />
              </Animated.Text>
            </Animated.View>
          </TouchableWithoutFeedback>
          <SharedElement id={`background.${route.params?.card.id}`} style={StyleSheet.absoluteFill}>
            <View style={styles.background} />
          </SharedElement>
          <Animated.View
            style={[
              StyleSheet.absoluteFill,
              styles.imageContainer,
              {
                transform: [{
                  scale: interpolate(scrollOffset, {
                    inputRange: [-px(260) - 1, -px(260), -px(260) + 1],
                    outputRange: [1.008, 1, 1],
                  }),
                  translateY: interpolate(scrollOffset, {
                    inputRange: [-px(260) - 1, -px(260), -px(260) + 1],
                    outputRange: [0, 0, -1],
                  }),
                }],
              },
            ]}
          >
            <SharedElement id={`image.${route.params?.card.id}`}>
              <Image style={styles.image} source={route.params?.card.photo} />
            </SharedElement>
          </Animated.View>
          <Animated.ScrollView
            style={[Styles.fullFlex, { marginLeft: px(30) }]}
            contentContainerStyle={styles.content}
            scrollEventThrottle={1}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollOffset } } }],
              { useNativeDriver: true },
            )}
            contentInset={{ top: px(260) }}
            contentOffset={{ y: -px(260) }}
          >
            <SharedElement id={`name.${route.params?.card.id}`} style={styles.name}>
              <Text style={styles.title}>
                {route.params?.card.name}
              </Text>
            </SharedElement>
            <SharedElement id={`description.${route.params?.card.id}`} style={styles.description}>
              <Text style={styles.text}>
                {route.params?.card.description}
              </Text>
            </SharedElement>
          </Animated.ScrollView>
        </Animated.View>
      </PanGestureHandler>
    </View>
  )
}
