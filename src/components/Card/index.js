// @flow
import React from 'react'
import {
  StyleSheet, TouchableOpacity, Text, View, Image,
} from 'react-native'
import { SharedElement } from 'react-navigation-shared-element'
import styles from './styles'

export default function Card({ card, onPress }: { card: Object, onPress: Function }) {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress} style={styles.container}>
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
    </TouchableOpacity>
  )
}
