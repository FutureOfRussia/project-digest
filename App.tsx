import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { enableScreens } from 'react-native-screens'
import { StatusBar } from 'expo-status-bar'
import { Provider } from 'react-redux'
import { useColorScheme, useCachedResources } from './src/hooks'
import Navigation from './src/navigation'
import store from './src/store'

enableScreens()

export default function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null
  }
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Navigation colorScheme={colorScheme} />
        <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      </Provider>
    </SafeAreaProvider>
  )
}
