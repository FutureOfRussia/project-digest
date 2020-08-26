import React from 'react'
import Animated, { interpolate, Extrapolate } from 'react-native-reanimated'
import { DotProps } from '../../types/Components'
import { Colors } from '../../constants'
import styles from './styles'

Dot.defaultProps = {
  color: Colors.ACTIVE_TINT,
}

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

  return <Animated.View style={[styles.container, { backgroundColor: props.color, opacity, transform: [{ scale }] }]} />
}
