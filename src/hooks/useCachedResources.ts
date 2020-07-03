import { useState, useEffect } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { Asset } from 'expo-asset'
import * as Font from 'expo-font'
import { Images } from '../constants'

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false)

  useEffect(() => {
    const loadResourcesAndDataAsync = async () => {
      try {
        await SplashScreen.preventAutoHideAsync()

        await Font.loadAsync({
          ...Ionicons.font,
          ...MaterialCommunityIcons.font,
          'space-mono': require('../../assets/fonts/SpaceMono-Regular.ttf'),
        })
        await Promise.all(Images.list.map((asset) => Asset.loadAsync(asset)))
      } catch (e) {
        console.warn(e)
      }
    }

    loadResourcesAndDataAsync().then(async () => {
      setLoadingComplete(true)
      await SplashScreen.hideAsync()
    })
  }, [])

  return isLoadingComplete
}
