import { Platform, StyleSheet } from 'react-native'
import { px } from '../../helpers/Dimensions'

export default StyleSheet.create({
  content: {
    padding: px(20),
    paddingTop: Platform.select({ ios: px(165), android: px(5) }),
  },
})
