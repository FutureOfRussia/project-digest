import React, { useRef, useState } from 'react'
import { Image, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useDispatch } from 'react-redux'
import Animated, {
  call, divide, interpolate, onChange, useCode,
} from 'react-native-reanimated'
import { interpolateColor, useScrollHandler } from 'react-native-redash'
import { height, px, width } from '../../helpers/Dimensions'
import { Colors, Images, Styles } from '../../constants'
import { black, white } from '../../helpers/Colors'
import { Dispatch } from '../../Types/Models'
import {
  BounceButton, Slide, Text, View, Dot,
} from '../../components'
import { useTerms } from '../../hooks'
import styles from './styles'

const slides = [
  {
    title: 'First',
    color: Colors.YELLOW_EMULSION,
    image: Images.flower1,
    footer: {
      title: 'First title',
      subtitle: 'First subtitle',
    },
  },
  {
    title: 'Second',
    color: Colors.OAK_SHAVING,
    image: Images.flower2,
    footer: {
      title: 'Second title',
      subtitle: 'Second subtitle',
    },
  },
  {
    title: 'Third',
    color: Colors.ESCARGOT,
    image: Images.flower3,
    footer: {
      title: 'Third title',
      subtitle: 'Third subtitle',
    },
  },
  {
    title: 'Last',
    color: Colors.QUARTZ_PINK,
    image: Images.flower4,
    footer: {
      title: 'Last title',
      subtitle: 'Last subtitle',
    },
  },
]

export default function Welcome() {
  const { appState: { setAppState } }: Dispatch = useDispatch()
  const scroll = useRef<Animated.ScrollView>(null)
  const [index, setIndex] = useState(0)
  const { scrollHandler, x } = useScrollHandler()
  const { welcome: terms } = useTerms()

  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width(100)),
    outputRange: slides.map((slide) => slide.color),
  })

  const currentIndex = divide(x, width(100))

  useCode(() => onChange(currentIndex, call([currentIndex], ([_i]) => {
    if (Math.trunc(_i) !== index) setIndex(_i)
  })), [index])

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
      <View style={styles.dots} lightColor={white(0.85)} darkColor={black(0.85)}>
        {slides.map((_, i) => <Dot currentIndex={currentIndex} index={i} key={i.toString()} />)}
      </View>
      <View style={styles.footer} lightColor={white(0.85)} darkColor={black(0.85)}>
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
        <BounceButton
          style={styles.buttonContainer}
          onPress={() => {
            if (index === slides.length - 1) {
              setAppState({ showWelcome: false })
            } else if (scroll.current) {
              scroll.current.getNode().scrollTo({ x: width(100) * (index + 1), animated: true })
            }
          }}
        >
          <View style={styles.button} lightColor={black(0.8)} darkColor={Colors.WHITE}>
            <Text style={styles.buttonText} lightColor={Colors.WHITE} darkColor={black(0.85)}>
              {index === slides.length - 1 ? terms.start : terms.next}
            </Text>
          </View>
        </BounceButton>
      </View>
    </Animated.View>
  )
}
