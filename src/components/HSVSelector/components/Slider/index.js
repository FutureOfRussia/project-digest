// @flow
import React from 'react'
import Animated, {
  Value, diffClamp, divide, set, useCode, block,
} from 'react-native-reanimated'
import { PanGestureHandler, State } from 'react-native-gesture-handler'
import { onGestureEvent, withOffset } from 'react-native-redash'
import { LinearGradient } from 'expo-linear-gradient'
import { useMemoOne } from 'use-memo-one'
import * as Haptics from 'expo-haptics'
import { px } from '../../../../helpers/Dimensions'
import { Colors } from '../../../../constants'
import styles from './styles'
import { hitSlop } from '../../../../helpers/Utilities'

type SliderProps = {
  value: Animated.Value<number>,
  color: Animated.Node<number>,
  state: Animated.Value<number>,
}

export default function Slider({ value, color, state }: SliderProps) {
  const _state = new Value(State.UNDETERMINED)
  const translationX = new Value(0)
  const offset = new Value(px(250))
  const gestureHandler = useMemoOne(() => onGestureEvent({
    translationX,
    state: _state,
  }), [translationX, _state])
  const translateX = diffClamp(withOffset(translationX, _state, offset), 0, px(250))

  useCode(() => block([
    set(value, divide(translateX, px(250))),
    set(state, _state),
  ]), [])

  const onHaptic = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
  }

  return (
    <Animated.View style={[styles.container, { backgroundColor: color }]}>
      <LinearGradient
        colors={[Colors.black(), Colors.black(0.35), Colors.transparent]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.background}
      >
        <PanGestureHandler {...gestureHandler}>
          <Animated.View
            style={[styles.cursor, { transform: [{ translateX }] }]}
            onStartShouldSetResponder={onHaptic}
            hitSlop={hitSlop(px(25))}
          />
        </PanGestureHandler>
      </LinearGradient>
    </Animated.View>
  )
}
