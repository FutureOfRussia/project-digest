import React from 'react'
import {
  Image, Text, TouchableOpacity, View,
} from 'react-native'
import styles from './styles'

interface Card {
  image: number,
  title: string,
  description: string,
}

export default function ComponentCard({ card, onPress }: { card: Card, onPress: () => void }): JSX.Element {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={card.image} style={styles.imageBackground} />
      <View style={styles.topBlock}>
        <Text style={styles.title}>{card.title}</Text>
      </View>
      <View style={styles.bottomBlock}>
        <Text style={styles.description}>{card.description}</Text>
      </View>
    </TouchableOpacity>
  )
}
