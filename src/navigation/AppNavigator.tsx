import React, { useEffect, useState } from 'react'
import { ImageBackground, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import * as Localization from 'expo-localization'
import { useDispatch } from 'react-redux'
import { Colors, Images, Styles } from '../constants'
import { CardList } from '../modules'
import { Dispatch } from '../models'
import HomeStack from './HomeStack'
import { HSV } from '../screens'

const Stack = createNativeStackNavigator()

export default function () {
  const { appState: { setAppState } }: Dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      let [locale] = Localization.locale.split('-')
      if (locale !== 'ru') locale = 'en'
      setAppState({ locale })
    }

    setLoading(true)
    fetchData().then(() => setLoading(false)).catch((e) => console.log(e))
  }, [])

  if (loading) {
    return (
      <ImageBackground
        source={Images.splash}
        resizeMode="contain"
        style={[Styles.fullFlex, { backgroundColor: Colors.BACKGROUND }]}
      >
        <StatusBar barStyle="dark-content" />
      </ImageBackground>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeStack} />
        <Stack.Screen name="HSV" component={HSV} />
        <Stack.Screen name="CardList" component={CardList} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
