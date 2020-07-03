import React from 'react'
import { View as DefaultView } from 'react-native'
import { ViewProps } from '../../Types/Components'
import { useThemeColor } from '../../hooks'

export default function View(props: ViewProps) {
  const {
    style, lightColor, darkColor, ...otherProps
  } = props
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background')

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />
}
