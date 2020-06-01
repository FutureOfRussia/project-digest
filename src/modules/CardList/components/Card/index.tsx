import React from 'react'
import {
  StyleSheet, Text, View, Image, TouchableWithoutFeedback,
} from 'react-native'
import Reanimated, { Extrapolate, interpolate } from 'react-native-reanimated'
import { SharedElement } from 'react-navigation-shared-element'
import { CardType } from '../../screens/List'
import styles from './styles'

export default function Card({ card, velocity, onPress }: {
  card: CardType, velocity: Reanimated.Value<number>, onPress: () => void,
}): any {
  return (
    <TouchableWithoutFeedback {...{ onPress }}>
      <Reanimated.View
        style={[
          styles.container,
          {
            transform: [{
              perspective: 800,
              rotateX: interpolate(velocity, {
                inputRange: [-5, -0.5, 0, 0.5, 5],
                outputRange: [0.15, 0, 0, 0, -0.15],
                extrapolate: Extrapolate.CLAMP,
              }),
            }],
          },
        ]}
      >
        <SharedElement id={`background.${card.id}`} style={StyleSheet.absoluteFill}>
          <View style={styles.background} />
        </SharedElement>
        <SharedElement id={`image.${card.id}`}>
          <Image style={styles.image} source={card.photo} />
        </SharedElement>
        <View style={styles.content}>
          <SharedElement id={`name.${card.id}`} style={styles.name}>
            <Text style={styles.title}>{card.name}</Text>
          </SharedElement>
          {card.description && (
            <SharedElement id={`description.${card.id}`} style={styles.description}>
              <Text numberOfLines={3} style={styles.text}>{card.description}</Text>
            </SharedElement>
          )}
        </View>
      </Reanimated.View>
    </TouchableWithoutFeedback>
  )
}
