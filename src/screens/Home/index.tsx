import React from 'react'
import { StatusBar, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { useTerms } from '../../helpers/Utilities'
import { Images, Styles } from '../../constants'
import { ComponentCard } from '../../components'
import styles from './styles'


export default function Home() {
  const navigation = useNavigation()
  const { home: terms } = useTerms()

  const cards = {
    hsv: { image: Images.gradient, ...terms.cards.hsv },
    cardList: { image: Images.placeholder, ...terms.cards.cardList },
  }

  return (
    <>
      <View />
      <ScrollView style={Styles.fullFlex} contentContainerStyle={styles.content}>
        <StatusBar barStyle="dark-content" />
        <ComponentCard card={cards.hsv} onPress={() => navigation.navigate('HSV')} />
        <ComponentCard card={cards.cardList} onPress={() => navigation.navigate('CardList')} />
      </ScrollView>
    </>
  )
}
