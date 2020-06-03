import React, { useState } from 'react'
import { View } from 'react-native'
import { HSVSelector } from '../../modules'
import styles from './styles'

export default function HSV() {
  const [color, setColor] = useState({ r: 255, g: 255, b: 255 })

  return (
    <View style={[styles.container, { backgroundColor: `rgb(${color.r},${color.g},${color.b})` }]}>
      <HSVSelector onSave={(c) => setColor(c)} />
    </View>
  )
}