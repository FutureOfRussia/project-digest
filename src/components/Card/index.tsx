import React from 'react'
import { Image, Text, View } from 'react-native'
import { CardProps } from '../../types/Components'
import BounceButton from '../BounceButton'
import styles from './styles'

export default function Card({ card, onPress }: CardProps): JSX.Element {
  return (
    <BounceButton onPress={onPress} style={styles.container}>
      <Image source={card.image} style={styles.imageBackground} />
      <View style={styles.topBlock}>
        <Text style={styles.title}>{card.title}</Text>
      </View>
      <View style={styles.bottomBlock}>
        <Text style={styles.description}>{card.description}</Text>
      </View>
    </BounceButton>
  )
}
