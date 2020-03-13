import React, { useState } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { enableScreens } from 'react-native-screens'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import AppNavigator from './src/navigation/AppNavigator'
import { Styles } from './src/constants'
import store from './src/store'

enableScreens()

export default function App() {
  const [loading, setLoading] = useState(true)

  const _loadResourcesAsync = async () => Promise.all([
    Font.loadAsync({}),
  ])

  if (loading) {
    return (
      <AppLoading
        startAsync={_loadResourcesAsync}
        onError={(error) => console.warn(error)}
        onFinish={() => setLoading(false)}
      />
    )
  }

  return (
    <Provider store={store}>
      <View style={Styles.fullFlex}>
        <AppNavigator />
      </View>
    </Provider>
  )
}
