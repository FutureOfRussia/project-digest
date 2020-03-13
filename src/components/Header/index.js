// @flow
import React from 'react'
import { Text, Animated } from 'react-native'
import styles from './styles'

type HeaderProps = {
  title: string,
  opacity: number,
}

export default function Header({ title, opacity }: HeaderProps) {
  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <Text style={styles.title}>{title}</Text>
    </Animated.View>
  )
}
