// @flow
import React, { useState } from 'react'
import { View } from 'react-native'
import SyntaxHighlighter from 'react-native-syntax-highlighter'
import { defaultStyle } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { HSVSelector } from '../../modules'
import styles from './styles'

export default function Overview() {
  const [color, setColor] = useState({ r: 255, g: 255, b: 255 })
  const codeString = '(num) => num + 1'

  return (
    <View style={[styles.container, { backgroundColor: `rgb(${color.r},${color.g},${color.b})` }]}>
      <HSVSelector onSave={(c) => setColor(c)} />
      {/*<SyntaxHighlighter*/}
      {/*  language="javascript"*/}
      {/*  style={defaultStyle}*/}
      {/*>*/}
      {/*  {codeString}*/}
      {/*</SyntaxHighlighter>*/}
    </View>
  )
}
