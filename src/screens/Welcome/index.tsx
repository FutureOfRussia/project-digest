import React, { useRef } from 'react'
import { Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { interpolateColor, useScrollHandler } from 'react-native-redash'
import Animated, { divide, interpolate } from 'react-native-reanimated'
import { StatusBar } from 'expo-status-bar'
import { BlurView } from 'expo-blur'
import { height, px, width } from '../../helpers/Dimensions'
import { Colors, Images, Styles } from '../../constants'
import { useColorScheme, useTerms } from '../../hooks'
import {
  BounceButton, Slide, Text, View, Dot,
} from '../../components'
import styles from './styles'

const slides = [
  {
    title: 'First',
    color: Colors.YELLOW_EMULSION,
    image: Images.getImage('flower1'),
    footer: {
      title: 'First title',
      subtitle: 'First subtitle',
    },
  },
  {
    title: 'Second',
    color: Colors.OAK_SHAVING,
    image: Images.getImage('flower2'),
    footer: {
      title: 'Second title',
      subtitle: 'Second subtitle',
    },
  },
  {
    title: 'Third',
    color: Colors.ESCARGOT,
    image: Images.getImage('flower3'),
    footer: {
      title: 'Third title',
      subtitle: 'Third subtitle',
    },
  },
  {
    title: 'Last',
    color: Colors.QUARTZ_PINK,
    image: Images.getImage('flower4'),
    footer: {
      title: 'Last title',
      subtitle: 'Last subtitle',
    },
  },
]

export default function Welcome() {
  const scroll = useRef<Animated.ScrollView>(null)
  const { scrollHandler, x } = useScrollHandler()
  const { welcome: terms } = useTerms()
  const colorScheme = useColorScheme()
  const navigation = useNavigation()

  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width(100)),
    outputRange: slides.map((slide) => slide.color),
  })

  const currentIndex = divide(x, width(100))

  return (
    <Animated.View style={[Styles.fullFlex, { backgroundColor }]}>
      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar style="dark" />
      {slides.map(({ image }, i) => {
        const opacity = interpolate(currentIndex, { inputRange: [i - 0.75, i, i + 1], outputRange: [0, 1, 0] })
        const clamp = i % 2 > 0 ? -px(100) : px(50)
        const tX = interpolate(currentIndex, { inputRange: [i - 0.75, i, i + 1], outputRange: [clamp, 0, clamp] })
        return (
          <Animated.View style={[styles.underlay, { opacity, transform: [{ translateX: tX }] }]} key={i.toString()}>
            <Image source={image} style={{ width: width(100), height: height(100) }} />
          </Animated.View>
        )
      })}
      <BlurView intensity={25} tint={colorScheme} style={[Styles.fullFlex, StyleSheet.absoluteFillObject]} />
      <Animated.ScrollView
        horizontal
        snapToInterval={width(100)}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        style={Styles.fullFlex}
        ref={scroll}
        {...scrollHandler}
      >
        {slides.map(({ title }, i) => <Slide right={!(i % 2)} key={i.toString()} {...{ title }} />)}
      </Animated.ScrollView>
      <View style={styles.dots}>
        {slides.map((_, i) => <Dot currentIndex={currentIndex} index={i} key={i.toString()} />)}
      </View>
      <View style={styles.footer}>
        <View style={styles.footerText}>
          {slides.map(({ footer: { title, subtitle } }, i) => {
            const opacity = interpolate(currentIndex, { inputRange: [i - 0.5, i, i + 0.5], outputRange: [0, 1, 0] })
            const translateX = interpolate(currentIndex, {
              inputRange: [i - 0.75, i, i + 0.75],
              outputRange: [px(50), 0, -px(50)],
            })
            return (
              <Animated.View
                key={i.toString()}
                style={[StyleSheet.absoluteFillObject, { opacity, transform: [{ translateX }] }]}
              >
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
              </Animated.View>
            )
          })}
        </View>
        <View style={styles.buttonContainer}>
          {slides.map((_, i) => {
            const opacity = interpolate(currentIndex, { inputRange: [i - 0.5, i, i + 0.5], outputRange: [0, 1, 0] })
            const translateX = interpolate(currentIndex, {
              inputRange: [i - 0.75, i, i + 0.75],
              outputRange: [px(50), 0, -px(50)],
            })
            const zIndex = interpolate(currentIndex, { inputRange: [i - 0.5, i, i + 0.5], outputRange: [10, 20, 10] })
            return (
              <BounceButton
                key={i.toString()}
                style={[StyleSheet.absoluteFillObject, styles.button, { zIndex }]}
                onPress={() => {
                  if (i === slides.length - 1) {
                    navigation.navigate('SignIn')
                  } else if (scroll.current) {
                    scroll.current.getNode().scrollTo({ x: width(100) * (i + 1), animated: true })
                  }
                }}
              >
                <Animated.View style={{ opacity, transform: [{ translateX }] }}>
                  <Text style={styles.buttonText}>
                    {i === slides.length - 1 ? terms.start : terms.next}
                  </Text>
                </Animated.View>
              </BounceButton>
            )
          })}
        </View>
      </View>
    </Animated.View>
  )
}
