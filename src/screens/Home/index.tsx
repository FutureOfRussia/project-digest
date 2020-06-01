import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button } from '../../components'
import styles from './styles'

export default function Home() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.navigate('CardList')} label="Go to Card List" />
    </View>
  )
}
