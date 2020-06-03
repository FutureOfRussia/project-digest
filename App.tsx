import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { enableScreens } from 'react-native-screens'
import AppNavigator from './src/navigation/AppNavigator'
import LoadAssets from './src/helpers/LoadAssets'
import { Images, Styles } from './src/constants'
import store from './src/store'

enableScreens()

export default function App() {
  return (
    <LoadAssets assets={Images.list}>
      <Provider store={store}>
        <View style={Styles.fullFlex}>
          <AppNavigator />
        </View>
      </Provider>
    </LoadAssets>
  )
}
