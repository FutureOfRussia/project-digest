// @flow
import React, { useLayoutEffect } from 'react'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { Card, Home } from '../screens'

const { Navigator, Screen } = createSharedElementStackNavigator()

export default function ({ navigation, route }: any) {
  const isCard = () => !!(route.state && route.state.routes[route.state.index].name === 'Card')

  useLayoutEffect(() => {
    setTimeout(() => navigation.setOptions({ tabBarVisible: !isCard() }), 400)
  }, [navigation, route])

  return (
    <Navigator
      initialRouteName="Home"
      mode="modal"
      headerMode="none"
      screenOptions={{
        transitionSpec: {
          open: { animation: 'timing', config: { duration: 300 } },
          close: { animation: 'timing', config: { duration: 300 } },
        },
        cardStyleInterpolator: ({ current: { progress } }) => {
          const opacity = progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolate: 'clamp',
          })
          return { cardStyle: { opacity } }
        },
        gestureEnabled: false,
        cardStyle: { backgroundColor: 'transparent' },
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Card" component={Card} />
    </Navigator>
  )
}
