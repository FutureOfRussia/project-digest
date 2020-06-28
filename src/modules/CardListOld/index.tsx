import React from 'react'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { RouteProp } from '@react-navigation/native'
import { CardType } from './screens/List'
import { List, Details } from './screens'
import { Colors } from '../../constants'

const Stack = createSharedElementStackNavigator()

type RootStackParamList = {
  List: undefined
  Details: {
    sharedElements: Array<string | object>
    card: CardType
  }
}

export type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>

export default function CardList() {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        transitionSpec: {
          open: { animation: 'timing', config: { duration: 300 } },
          close: { animation: 'timing', config: { duration: 300 } },
        },
        cardStyleInterpolator: ({ current: { progress } }) => {
          const opacity = progress.interpolate({
            inputRange: [0, 0.5, 0.9, 1],
            outputRange: [0, 0.25, 0.7, 1],
          })
          return { cardStyle: { opacity } }
        },
        gestureEnabled: false,
        cardStyle: { backgroundColor: Colors.TRANSPARENT },
      }}
    >
      <Stack.Screen name="List" component={List} />
      <Stack.Screen
        name="Details"
        component={Details}
        sharedElements={(route) => route.params.sharedElements}
      />
    </Stack.Navigator>
  )
}
