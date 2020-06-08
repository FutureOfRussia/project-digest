import React from 'react'
import {
  TouchableOpacity, Text, ActivityIndicator, Image, View,
} from 'react-native'
import { Colors } from '../../constants'
import styles from './styles'

interface ButtonProps {
  label?: string
  icon?: number
  disabled?: boolean
  loading?: boolean
  disabledWithoutColor?: boolean
  color?: string
  buttonStyle?: object
  textStyle?: object
  iconStyle?: object
  onPress?: any
}

Button.defaultProps = {
  label: '',
  icon: null,
  disabled: false,
  loading: false,
  disabledWithoutColor: false,
  color: Colors.BLACK,
  buttonStyle: {},
  textStyle: {},
  iconStyle: {},
  onPress: () => {},
}

export default function Button({
  label, onPress, buttonStyle, textStyle, disabled,
  color, loading, disabledWithoutColor, icon, iconStyle,
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button, buttonStyle, { backgroundColor: color }, disabled && styles.disabledBtn,
      ]}
      disabled={disabled || loading || disabledWithoutColor}
    >
      {loading ? (
        <ActivityIndicator color={Colors.WHITE} size="large" />
      ) : (
        <View style={styles.content}>
          {!!icon && <Image resizeMode="contain" source={icon} style={[styles.icon, iconStyle]} />}
          {!!label && (
            <Text style={[styles.text, textStyle, disabled && styles.disabledText]}>
              {label}
            </Text>
          )}
        </View>
      )}
    </TouchableOpacity>
  )
}
