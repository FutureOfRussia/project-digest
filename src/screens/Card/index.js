// @flow
import React, { useState, useEffect } from 'react'
import {
  View, Text, Image, StyleSheet, Platform, StatusBar, TouchableOpacity, BackHandler,
} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SharedElement } from 'react-navigation-shared-element'
import { PanGestureHandler, State } from 'react-native-gesture-handler'
import Animated, {
  and, block, call, cond, eq, Extrapolate, greaterOrEq, interpolate, set, useCode,
} from 'react-native-reanimated'
import {
  onGestureEvent, timing, useValues,
} from 'react-native-redash'
import { useMemoOne } from 'use-memo-one'
import { height, px } from '../../helpers/Dimensions'
import styles from './styles'
import { Colors, Styles } from '../../constants'

Card.sharedElements = (route) => route.params?.sharedElements

export default function Card() {
  const [scrollOffset, translationY, translateY, snapBack, state] = useValues(
    [0, 0, 0, 0, State.UNDETERMINED],
    [],
  )
  const scale = interpolate(translateY, {
    inputRange: [0, px(90), px(160), px(161)],
    outputRange: [1, 0.9, 0.85, 0.85],
    extrapolate: Extrapolate.CLAMP,
  })
  const opacity = interpolate(translateY, {
    inputRange: [0, px(160), px(161)],
    outputRange: [1, 0.5, 0],
    extrapolate: Extrapolate.CLAMP,
  })
  const gestureHandler = useMemoOne(
    () => onGestureEvent({ translationY, state }),
    [state, translationY],
  )
  const [backEnabled, setBackEnabled] = useState(false)
  const navigation = useNavigation()
  const route = useRoute()

  let goBack = false

  useEffect(() => {
    if (!backEnabled) setTimeout(() => setBackEnabled(true), 500)
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => !backEnabled)
    return () => backHandler.remove()
  }, [backEnabled])

  useCode(
    () => block([
      cond(
        and(greaterOrEq(translationY, px(180)), eq(snapBack, 0)),
        set(snapBack, 1),
      ),
      cond(
        snapBack,
        call([], () => {
          if (!goBack) {
            goBack = true
            navigation.navigate('Home')
          }
        }),
        cond(
          eq(state, State.END),
          set(
            translateY,
            timing({ from: translationY, to: 0, duration: 100 }),
          ),
          set(translateY, translationY),
        ),
      ),
    ]),
    [],
  )

  return (
    <View style={styles.substrate}>
      <StatusBar barStyle="light-content" hidden={Platform.OS === 'ios'} />
      <PanGestureHandler
        {...gestureHandler}
        hitSlop={Platform.select({
          android: { bottom: -(height(100) - px(300)), height: 0 },
          ios: { top: 0, height: px(260) },
        })}
      >
        <Animated.View style={[styles.container, { transform: [{ scale }] }]}>
          {/*<Animated.View style={{*/}
          {/*  position: 'absolute',*/}
          {/*  top: px(20),*/}
          {/*  right: px(20),*/}
          {/*  zIndex: 30,*/}
          {/*  backgroundColor: Colors.white(0.9),*/}
          {/*  width: px(30),*/}
          {/*  height: px(30),*/}
          {/*  borderRadius: px(15),*/}
          {/*  justifyContent: 'center',*/}
          {/*  alignItems: 'center',*/}
          {/*  opacity: back ? 0 : opacity,*/}
          {/*}}>*/}
          {/*  <TouchableOpacity onPress={() => {*/}
          {/*    setBack(true)*/}
          {/*    navigation.goBack()*/}
          {/*  }}>*/}
          {/*    <Text style={{*/}
          {/*      color: Colors.black(0.8),*/}
          {/*      fontSize: px(20),*/}
          {/*    }}>X</Text>*/}
          {/*  </TouchableOpacity>*/}
          {/*</Animated.View>*/}
          <SharedElement id={`background.${route.params?.card.id}`} style={StyleSheet.absoluteFill}>
            <View style={styles.background} />
          </SharedElement>
          <Animated.View style={[styles.imageContainer, Platform.OS === 'ios' && {
            transform: [{
              scale: scrollOffset.interpolate({
                inputRange: [px(260) / -2, 0, 1],
                outputRange: [2, 1, 1],
              }),
            }],
          }]}
          >
            <SharedElement id={`image.${route.params?.card.id}`}>
              <Image style={styles.image} source={route.params?.card.photo} />
            </SharedElement>
          </Animated.View>
          <Animated.ScrollView
            style={Styles.fullFlex}
            contentContainerStyle={styles.content}
            scrollEventThrottle={16}
            onScroll={Platform.OS === 'ios' && Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollOffset } } }],
              {
                useNativeDriver: true,
              },
            )}
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
