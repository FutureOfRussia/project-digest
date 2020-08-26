import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as Linking from 'expo-linking'
import { LinkProps } from '../../types/Components'
import { px } from '../../helpers/Dimensions'
import { useThemeColor } from '../../hooks'
import styles from './styles'

export default function Link(props: LinkProps): JSX.Element {
  const color = useThemeColor({}, 'text')

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={props.icon} size={px(28)} color={color} />
      <TouchableOpacity style={styles.link} onPress={() => Linking.openURL(props.url)}>
        <Text style={styles.linkText}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  )
}
