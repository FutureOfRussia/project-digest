import React from 'react'
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { CheckBoxProps } from '../../types/Components'
import { px } from '../../helpers/Dimensions'
import { Colors } from '../../constants'
import BounceButton from '../BounceButton'
import styles from './styles'
import Text from '../Text'

CheckBox.defaultProps = {
  label: '',
  boxColor: Colors.ACTIVE_TINT,
  checkColor: Colors.WHITE,
  onPress: () => {},
}

export default function CheckBox(props: CheckBoxProps): JSX.Element {
  return (
    <BounceButton style={styles.container} onPress={props.onPress}>
      <View style={[styles.box, { backgroundColor: props.boxColor }]}>
        {props.value && <Ionicons name="ios-checkmark" color={props.checkColor} size={px(25)} />}
      </View>
      <Text style={styles.label}>{props.label}</Text>
    </BounceButton>
  )
}
