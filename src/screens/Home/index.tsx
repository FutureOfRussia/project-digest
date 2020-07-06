import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { Images, Styles } from '../../constants'
import { Card, View } from '../../components'
import { useTerms } from '../../hooks'
import styles from './styles'

export default function Home() {
  const navigation = useNavigation()
  const { home: terms } = useTerms()

  const cards = [
    { image: Images.gradient, ...terms.cards.hsv, path: 'HSV' },
    { image: Images.cards, ...terms.cards.cardList, path: 'CardList' },
  ]

  const onPress = (path: string): void => {
    navigation.navigate(path)
  }

  return (
    <View style={Styles.fullFlex}>
      <View />
      <ScrollView style={Styles.fullFlex} contentContainerStyle={styles.content}>
        {cards.map((card, index) => (
          <Card card={card} onPress={() => onPress(card.path)} key={index.toString()} />
        ))}
      </ScrollView>
    </View>
  )
}
