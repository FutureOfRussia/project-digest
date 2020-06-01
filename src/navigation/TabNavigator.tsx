import React from 'react'
import { createBottomTabNavigator, BottomTabBarOptions } from '@react-navigation/bottom-tabs'
import { Entypo } from '@expo/vector-icons'
import { useTerms } from '../helpers/Utilities'
import { Home, Overview } from '../screens'
import { px } from '../helpers/Dimensions'
import { Colors } from '../constants'

const Tab = createBottomTabNavigator()

const tabBarOptions: BottomTabBarOptions = {
  style: {
    height: px(85),
    backgroundColor: Colors.BACKGROUND,
  },
  tabStyle: {
    paddingTop: px(5),
  },
  labelStyle: {
    fontSize: px(11),
  },
  labelPosition: 'below-icon',
  activeTintColor: Colors.ACTIVE_TINT,
}

export default function () {
  const { tabs: terms } = useTerms()

  return (
    <Tab.Navigator tabBarOptions={tabBarOptions}>
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
  )
}
