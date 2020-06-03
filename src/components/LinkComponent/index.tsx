import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as Linking from 'expo-linking'
import { px } from '../../helpers/Dimensions'
import { Colors } from '../../constants'
import styles from './styles'

interface Link {
  icon: string,
  url: string,
  title: string,
}

export default function LinkComponent({ link }: { link: Link }): JSX.Element {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={link.icon} size={px(28)} color={Colors.BLACK} />
      <TouchableOpacity style={styles.link} onPress={() => Linking.openURL(link.url)}>
        <Text style={styles.linkText}>{link.title}</Text>
      </TouchableOpacity>
    </View>
  )
}
