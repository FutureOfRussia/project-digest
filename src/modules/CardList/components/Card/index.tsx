import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Reanimated, { add, interpolate, sub } from 'react-native-reanimated'
import { height, px } from '../../../../helpers/Dimensions'
import { rgb } from '../../../../helpers/Colors'
import styles from './styles'

const CARD_HEIGHT = px(230)

export default function Card({ length, index, y }: {
  length: number, index: number, y: Reanimated.Value<number>,
}): JSX.Element {
  const position = sub(index * CARD_HEIGHT, y)
  const isDisappearing = -CARD_HEIGHT
  const isTop = 0
  const isBottom = height(100) - CARD_HEIGHT
  const isAppearing = height(100)
  const translateY = add(
    add(
      y,
      interpolate(y, {
        inputRange: [isDisappearing, 0, CARD_HEIGHT],
        outputRange: [CARD_HEIGHT, 0, -CARD_HEIGHT],
      }),
    ),
    interpolate(position, {
      inputRange: [isDisappearing, isTop, isBottom, isAppearing],
      outputRange: [CARD_HEIGHT - px(1), 0, 0, -CARD_HEIGHT + px(1)],
    }),
  )

  const s = ((length + 3) / 4) - 1
  const p = 255 / (((length + 3) / 4) - 1)
  const firstStep = ((2 * s) - index) * p
  const secondStep = (index - (2 * s)) * p
  const lastStep = index > (2 * s) ? (((4 * s) - index) * p) : (index * p)

  const startColor = rgb(firstStep, secondStep, lastStep)
  const finishColor = rgb(secondStep, lastStep, firstStep)

  return (
    <Reanimated.View style={[styles.container, { transform: [{ translateY }] }]}>
      <LinearGradient
        colors={[startColor, finishColor]}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={styles.gradient}
      />
    </Reanimated.View>
  )
}
