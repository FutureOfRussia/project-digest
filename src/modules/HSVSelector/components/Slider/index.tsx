// @flow
import React from 'react'
import Animated, {
  diffClamp, divide, set, useCode, block,
} from 'react-native-reanimated'
import { PanGestureHandler, State } from 'react-native-gesture-handler'
import { onGestureEvent, useValue, withOffset } from 'react-native-redash'
import { LinearGradient } from 'expo-linear-gradient'
import { useMemoOne } from 'use-memo-one'
import * as Haptics from 'expo-haptics'
import { hitSlop } from '../../../../helpers/Utilities'
import { px } from '../../../../helpers/Dimensions'
import { black } from '../../../../helpers/Colors'
import { Colors } from '../../../../constants'
import styles from './styles'

interface SliderProps {
  value: Animated.Value<number>
  color: Animated.Node<number>
  state: Animated.Value<number>
}

export default function Slider({ value, color, state }: SliderProps) {
  const _state = useValue(State.UNDETERMINED)
  const translationX = useValue(0)
  const offset = useValue(px(250))
  const gestureHandler = useMemoOne(() => onGestureEvent({
    translationX,
    state: _state,
  }), [translationX, _state])
  const translateX = diffClamp(withOffset(translationX, _state, offset), 0, px(250))

  useCode(() => block([
    set(value, divide(translateX, px(250))),
    set(state, _state),
  ]), [])

  const onHaptic = (): boolean => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch((e) => console.log(e))
    return false
  }

  return (
    <Animated.View style={[styles.container, { backgroundColor: color }]}>
      <LinearGradient
        colors={[Colors.BLACK, black(0.35), Colors.TRANSPARENT]}
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
