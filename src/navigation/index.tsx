import React, { useState, useEffect, useRef } from 'react'
import {
  ColorSchemeName, ImageBackground, StyleSheet, TouchableOpacity,
} from 'react-native'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import * as Localization from 'expo-localization'
import { Ionicons } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import * as Linking from 'expo-linking'
import LinkingConfiguration from '../helpers/LinkingConfiguration'
import { Colors, Images, Styles } from '../constants'
import { Home, HSV, Profile } from '../screens'
import { Dispatch } from '../Types/Models'
import { px } from '../helpers/Dimensions'
import { white } from '../helpers/Colors'
import { CardList } from '../modules'
import { useTerms } from '../hooks'

const Stack = createNativeStackNavigator()

const hsvUrl = 'https://github.com/FutureOfRussia/project-digest/tree/master/src/modules/HSVSelector'
const cardListUrl = 'https://github.com/FutureOfRussia/project-digest/tree/master/src/modules/CardList'

const styles = StyleSheet.create({
  rightElement: {
    width: px(50),
    height: px(45),
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const { appState: { setAppState } }: Dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const navigation: any = useRef(null)
  const { titles } = useTerms()

  useEffect(() => {
    const fetchData = async () => {
      let [locale] = await Localization.locale.split('-')
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
        style={[Styles.fullFlex, { backgroundColor: Colors.WHITE }]}
      />
    )
  }

  return (
    <NavigationContainer
      ref={navigation}
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <Stack.Navigator
        screenOptions={{
          headerLargeTitle: true,
          headerTranslucent: true,
          headerStyle: { backgroundColor: white(0.1) },
          headerTintColor: Colors.ACTIVE_TINT,
          headerTitleStyle: { color: Colors.BLACK },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: titles.home,
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.current.navigate('Profile')} style={styles.rightElement}>
                <Ionicons name="ios-contact" size={px(45)} color={Colors.ACTIVE_TINT} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen name="Profile" component={Profile} options={{ stackPresentation: 'modal' }} />
        <Stack.Screen
          name="HSV"
          component={HSV}
          options={{
            headerTitle: titles.hsv,
            headerRight: () => (
              <TouchableOpacity onPress={() => Linking.openURL(hsvUrl)} style={styles.rightElement}>
                <Ionicons name="ios-git-network" size={px(35)} color={Colors.ACTIVE_TINT} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="CardList"
          component={CardList}
          options={{
            headerTitle: titles.cardList,
            headerRight: () => (
              <TouchableOpacity onPress={() => Linking.openURL(cardListUrl)} style={styles.rightElement}>
                <Ionicons name="ios-git-network" size={px(35)} color={Colors.ACTIVE_TINT} />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
