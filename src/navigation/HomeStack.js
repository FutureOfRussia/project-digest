import React from 'react'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { Card, Home } from '../screens'

const { Navigator, Screen } = createSharedElementStackNavigator()

export default () => (
  <Navigator initialRouteName="Home">
    <Screen name="Home" component={Home} />
    <Screen
      name="Card"
      component={Card}
      sharedElementsConfig={() => ['title']}
    />
  </Navigator>
)

// export default createSharedElementStackNavigator(
//   { Home, Card },
//   {
//     transitionConfig: () => springyFadeIn(),
//   },
// )
