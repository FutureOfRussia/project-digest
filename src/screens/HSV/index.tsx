import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Markdown from 'react-native-markdown-display'
import { HSVSelector } from '../../modules'
import { Styles } from '../../constants'
import { View } from '../../components'
import { useTerms, useThemeColor } from '../../hooks'
import styles from './styles'

export default function HSV() {
  const color = useThemeColor({}, 'text')
  const { hsv: terms } = useTerms()

  const style = { ...styles, body: { ...styles.body, color }, heading2: { ...styles.heading2, color } }

  return (
    <View style={Styles.fullFlex}>
      <View />
      <ScrollView style={Styles.fullFlex} contentContainerStyle={styles.container}>
        <HSVSelector title={terms.selectColor} />
        <Markdown onLinkPress={() => true} style={style}>
          {terms.description}
        </Markdown>
      </ScrollView>
    </View>
  )
}
