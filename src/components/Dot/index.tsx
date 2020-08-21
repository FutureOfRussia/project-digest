import React from 'react'
import Animated, { interpolate, Extrapolate } from 'react-native-reanimated'
import { DotProps } from '../../Types/Components'
import { useThemeColor } from '../../hooks'
import styles from './styles'

export default function Dot(props: DotProps): JSX.Element {
  const opacity = interpolate(props.currentIndex, {
    inputRange: [props.index - 1, props.index, props.index + 1],
    outputRange: [0.3, 1, 0.3],
    extrapolate: Extrapolate.CLAMP,
  })
  const scale = interpolate(props.currentIndex, {
    inputRange: [props.index - 1, props.index, props.index + 1],
    outputRange: [1, 1.25, 1],
    extrapolate: Extrapolate.CLAMP,
  })
  const backgroundColor = useThemeColor({}, 'dot')

  return <Animated.View style={[styles.container, { backgroundColor, opacity, transform: [{ scale }] }]} />
}
