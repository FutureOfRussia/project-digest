import React from 'react'
import { Image, Text, View } from 'react-native'
import Reanimated, { interpolate } from 'react-native-reanimated'
import { useValue } from 'react-native-redash'
import TapHandler from '../TapHandler'
import styles from './styles'

interface Card {
  image: number,
  title: string,
  description: string,
}

export default function ComponentCard({ card, onPress }: { card: Card, onPress: () => void }): JSX.Element {
  const value = useValue(0)

  return (
    <TapHandler value={value} onPress={onPress}>
      <Reanimated.View
        style={[styles.container, {
          transform: [{
            scale: interpolate(value, {
              inputRange: [-1, 0, 1],
              outputRange: [1, 1, 0.96],
            }),
          }],
        }]}
      >
        <Image source={card.image} style={styles.imageBackground} />
        <View style={styles.topBlock}>
          <Text style={styles.title}>{card.title}</Text>
        </View>
        <View style={styles.bottomBlock}>
          <Text style={styles.description}>{card.description}</Text>
        </View>
      </Reanimated.View>
    </TapHandler>
  )
}
