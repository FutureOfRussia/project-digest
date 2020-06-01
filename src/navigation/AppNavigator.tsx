import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import TabNavigator from './TabNavigator'
import { CardList } from '../modules'

const Stack = createNativeStackNavigator()

export default function () {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="CardList" component={CardList} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
