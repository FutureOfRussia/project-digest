import React, { useEffect, useState } from 'react'
import { DeviceEventEmitter, View } from 'react-native'
import { mix, useTapGestureHandler, useValue } from 'react-native-redash'
import { State, TapGestureHandler } from 'react-native-gesture-handler'
import Animated, {
  call, cond, Easing, eq, onChange, timing, useCode,
} from 'react-native-reanimated'
import * as Random from 'expo-random'
import { BounceButtonProps } from '../../Types/Components'

export default function BounceButton({ children = <View />, onPress = () => {}, style }: BounceButtonProps) {
  const { gestureHandler, state } = useTapGestureHandler()
  const pressed = useValue<number>(0)
  const progress = useValue(0)
  const scale = mix(progress, 1, 0.96)

  const [eventType, setEventType] = useState('onClick@')

  useEffect(() => {
    Random.getRandomBytesAsync(16).then((res) => setEventType(`onClick@${res.toString()}`))
  }, [])

  useEffect(() => {
    const onClickListener = DeviceEventEmitter.addListener(eventType, onPress)
    return () => onClickListener.remove()
  }, [onPress, eventType])

  useCode(() => [
    cond(
      eq(state, State.BEGAN),
      [call([], () => {
        timing(progress, {
          toValue: 1,
          duration: 100,
          easing: Easing.out(Easing.ease),
        }).start(() => pressed.setValue(1))
      })],
      [cond(pressed, [call([], () => {
        timing(progress, {
          toValue: 0,
          duration: 100,
          easing: Easing.out(Easing.ease),
        }).start(() => pressed.setValue(0))
      })])],
    ),
    onChange(state, cond(eq(state, State.END), [call([], () => DeviceEventEmitter.emit(eventType))])),
  ], [eventType])

  return (
    <TapGestureHandler {...gestureHandler}>
      <Animated.View style={[style, { transform: [{ scale }] }]}>
        {children}
      </Animated.View>
    </TapGestureHandler>
  )
}
