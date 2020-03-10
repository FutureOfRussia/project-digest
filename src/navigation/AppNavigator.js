import React from 'react'
import { NativeContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Main } from '../screens'
import { Colors } from '../constants'

const Stack = createStackNavigator()
const screenOptions = {
  headerShown: false,
  cardShadowEnabled: false,
  cardOverlayEnabled: false,
  animationEnabled: false,
  cardStyle: {
    backgroundColor: Colors.transparent,
  },
}

export default function () {
  return (
    <NativeContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={screenOptions}>
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NativeContainer>
  )
}
