import React from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Markdown from 'react-native-markdown-display'
import { HSVSelector } from '../../modules'
import { Styles } from '../../constants'
import { useTerms } from '../../hooks'
import styles from './styles'

export default function HSV() {
  const { hsv: terms } = useTerms()

  return (
    <>
      <View />
      <ScrollView style={Styles.fullFlex} contentContainerStyle={styles.container}>
        <HSVSelector title={terms.selectColor} />
        <Markdown onLinkPress={() => true} style={styles}>
          {terms.description}
        </Markdown>
      </ScrollView>
    </>
  )
}
