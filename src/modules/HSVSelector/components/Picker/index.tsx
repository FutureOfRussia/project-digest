import React from 'react'
import { StyleSheet, View } from 'react-native'
import { PanGestureHandler, State } from 'react-native-gesture-handler'
import Animated, {
  cond, divide, eq, modulo, pow, set, useCode, and, lessThan, block,
} from 'react-native-reanimated'
import {
  canvas2Polar, clamp, onGestureEvent, polar2Canvas, translate, useValue, vec, withOffset, useVector,
} from 'react-native-redash'
import { useMemoOne } from 'use-memo-one'
import * as Haptics from 'expo-haptics'
import { hitSlop } from '../../../../helpers/Utilities'
import { px } from '../../../../helpers/Dimensions'
import { PickerProps } from '../../types'
import styles from './styles'

export default function Picker({
  hue, saturation, size, state,
}: PickerProps) {
  const center = { x: size / 2, y: size / 2 }
  const _state = useValue(State.UNDETERMINED)
  const translation = useVector(0, 0)
  const gestureHandler = useMemoOne(() => onGestureEvent({
    state: _state,
    translationX: translation.x,
    translationY: translation.y,
  }), [_state, translation])
  const offset = {
    x: withOffset(translation.x, _state),
    y: withOffset(translation.y, _state),
  }
  const v2 = vec.add(offset, center)
  const polar = canvas2Polar(v2, center)

  const lTheta = useValue(0)

  useCode(() => [
    cond(
      and(eq(polar.theta, 0), lessThan(offset.x, 0)),
      set(lTheta, -Math.PI),
      set(lTheta, polar.theta),
    ),
  ], [])

  const l = {
    theta: lTheta,
    radius: clamp(polar.radius, 0, size / 2),
  }

  const h = divide(modulo(l.theta, 2 * Math.PI), 2 * Math.PI)
  const s = cond(eq(l.radius, 0), 0, divide(l.radius, size / 2))

  useCode(() => block([
    set(hue, h),
    set(saturation, pow(s, 2)),
    set(state, _state),
  ]), [])

  const onHaptic = (): boolean => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch((e) => console.log((e)))
    return false
  }

  return (
    <View style={[StyleSheet.absoluteFill, styles.container]}>
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          onStartShouldSetResponder={onHaptic}
          hitSlop={hitSlop(px(25))}
          style={[
            styles.cursor,
            {
              transform: [
                ...translate(polar2Canvas(l, center)),
                ...translate({
                  x: -px(30) / 2,
                  y: -px(30) / 2,
                }),
              ],
            },
          ]}
        />
      </PanGestureHandler>
    </View>
  )
}
