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

  const cards = [
    { image: Images.gradient, ...terms.cards.hsv, path: 'HSV' },
    { image: Images.cards, ...terms.cards.cardList, path: 'CardList' },
  ]

  return (
    <>
      <View />
      <ScrollView style={Styles.fullFlex} contentContainerStyle={styles.content}>
        <StatusBar barStyle="dark-content" />
        {cards.map((card, index) => (
          <ComponentCard card={card} onPress={() => navigation.navigate(card.path)} key={index.toString()} />
        ))}
      </ScrollView>
    </>
  )
}
