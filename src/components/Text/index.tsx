import React from 'react'
import { Text as DefaultText } from 'react-native'
import { TextProps } from '../../types/Components'
import { useThemeColor } from '../../hooks'

export default function Text(props: TextProps) {
  const {
    fontFamily, fontSize, style, lightColor, darkColor, ...otherProps
  } = props
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text')

  return <DefaultText style={[{ color, fontFamily, fontSize }, style]} {...otherProps} />
}
