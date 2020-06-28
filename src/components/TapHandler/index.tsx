import React from 'react'
import Animated, {
  block, call, cond, Easing, eq, timing, useCode,
} from 'react-native-reanimated'
import { State, TapGestureHandler } from 'react-native-gesture-handler'
import { onGestureEvent, useValue } from 'react-native-redash'
import { useMemoOne } from 'use-memo-one'

interface Props {
  value: Animated.Value<number>
  onPress?: () => void
  children: JSX.Element
}

export default function TapHandler({ onPress = () => {}, children, value }: Props): JSX.Element {
  const state = useValue(State.UNDETERMINED)
  const gestureHandler = useMemoOne(() => onGestureEvent({ state }), [state])

  useCode(() => block([
    cond(
      eq(state, State.BEGAN),
      call([], () => {
        timing(value, {
          toValue: 1,
          duration: 100,
          easing: Easing.out(Easing.ease),
        }).start()
      }),
      call([], () => {
        timing(value, {
          toValue: 0,
          duration: 100,
          easing: Easing.out(Easing.ease),
        }).start()
      }),
    ),
    cond(
      eq(state, State.END),
      call([], onPress),
    ),
  ]), [])

  return (
    <TapGestureHandler {...gestureHandler}>
      <Animated.View>{children}</Animated.View>
    </TapGestureHandler>
  )
}
