import React, { useState } from 'react'
import { View, TextInput as BaseTextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { TextInputProps } from '../../types/Components'
import { px } from '../../helpers/Dimensions'
import { useThemeColor } from '../../hooks'
import { Colors } from '../../constants'
import styles from './styles'
import Text from '../Text'

export default function TextInput({
  activeTint = Colors.ACTIVE_TINT,
  onChangeText = () => {},
  icon,
  value,
  valid = false,
  inputProps = {},
  validError = '',
}: TextInputProps): JSX.Element {
  const color = useThemeColor({}, 'input')
  const textColor = useThemeColor({}, 'text')
  const [focused, setFocused] = useState(false)

  return (
    <View style={styles.container}>
      <View style={[styles.content, { borderColor: focused ? activeTint : color }]}>
        <Ionicons name={icon} color={focused ? activeTint : color} size={px(30)} />
        <BaseTextInput
          style={[styles.input, { color: textColor }]}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          value={value}
          onChangeText={(text) => onChangeText(text)}
          {...inputProps}
        />
        {valid && <Ionicons name="ios-checkmark-circle" color={activeTint} size={px(30)} />}
      </View>
      {!!validError && <Text style={styles.validText}>{validError}</Text>}
    </View>
  )
}
