// @flow
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo } from '@expo/vector-icons'
import { useTerms } from '../helpers/Utilities'
import { Home, Overview } from '../screens'
import { px } from '../helpers/Dimensions'
import { Colors } from '../constants'

const Tab = createBottomTabNavigator()

const tabBarOptions = {
  style: {
    height: px(85),
    backgroundColor: Colors.white(),
  },
  tabStyle: {
    paddingTop: px(5),
  },
  labelStyle: {
    fontSize: px(11),
  },
  labelPosition: 'below-icon',
}

export default function () {
  const { tabs: terms } = useTerms()
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" tabBarOptions={tabBarOptions}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: terms.home,
            tabBarIcon: ({ color }: { color: string }) => (
              <Entypo name="home" size={px(25)} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Overview"
          component={Overview}
          options={{
            title: terms.overview,
            tabBarIcon: ({ color }: { color: string }) => (
              <Entypo name="documents" size={px(25)} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
