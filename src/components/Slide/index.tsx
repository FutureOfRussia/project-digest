import React from 'react'
import { View } from 'react-native'
import { height, px, width } from '../../helpers/Dimensions'
import { SlideProps } from '../../types/Components'
import { Colors } from '../../constants'
import styles from './styles'
import Text from '../Text'

Slide.defaultProps = {
  right: false,
}

export default function Slide(props: SlideProps): JSX.Element {
  const transform = [
    { translateY: (height(65) - px(100)) / 2 },
    { translateX: props.right ? width(45) - px(50) : -width(45) + px(50) },
    { rotate: props.right ? '-90deg' : '90deg' },
  ]

  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, { transform }]}>
        <Text style={styles.title} lightColor={Colors.WHITE} darkColor={Colors.BLACK}>
          {props.title}
        </Text>
      </View>
    </View>
  )
}
