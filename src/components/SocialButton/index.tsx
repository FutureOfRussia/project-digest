import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { SocialButtonProps } from '../../types/Components'
import { px } from '../../helpers/Dimensions'
import BounceButton from '../BounceButton'
import { Colors } from '../../constants'
import styles from './styles'
import View from '../View'

SocialButton.defaultProps = { onPress: () => {} }

export default function SocialButton({ type, onPress }: SocialButtonProps): JSX.Element {
  return (
    <BounceButton style={styles.container} onPress={onPress}>
      <View style={styles.content}>
        <FontAwesome name={type} size={px(25)} color={Colors.ACTIVE_TINT} />
      </View>
    </BounceButton>
  )
}
