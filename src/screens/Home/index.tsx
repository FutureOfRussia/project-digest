import React from 'react'
import {
  Image, StatusBar, Text, TouchableOpacity, View,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { ComponentCard } from '../../components'
import { useTerms } from '../../helpers/Utilities'
import { Images, Styles } from '../../constants'
import styles from './styles'


export default function Home() {
  const navigation = useNavigation()
  const { home: terms } = useTerms()

  const cards = {
    hsv: { image: Images.gradient, ...terms.cards.hsv },
    cardList: { image: Images.placeholder, ...terms.cards.cardList },
  }

  return (
    <ScrollView style={Styles.fullFlex} contentContainerStyle={styles.content}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <View style={styles.headerLeftSection}>
          <Text style={styles.headerTitle}>{terms.title}</Text>
        </View>
        <TouchableOpacity style={styles.headerRightSection} onPress={() => navigation.navigate('Profile')}>
          <Image source={Images.forQ} style={styles.headerAvatar} />
        </TouchableOpacity>
      </View>
      <ComponentCard card={cards.hsv} onPress={() => navigation.navigate('HSV')} />
      <ComponentCard card={cards.cardList} onPress={() => navigation.navigate('CardList')} />
    </ScrollView>
  )
}
