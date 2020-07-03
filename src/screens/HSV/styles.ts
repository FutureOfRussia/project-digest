import { Platform, StyleSheet } from 'react-native'
import { px } from '../../helpers/Dimensions'
import { black } from '../../helpers/Colors'
import { Colors } from '../../constants'

export default StyleSheet.create({
  container: {
    paddingHorizontal: px(20),
    paddingBottom: px(60),
    paddingTop: Platform.select({ ios: px(180), android: px(40) }),
  },
  body: {
    fontSize: px(16),
    fontWeight: '400',
    color: black(0.8),
  },
  heading2: {
    marginTop: px(30),
    fontSize: px(24),
    fontWeight: '600',
    color: Colors.BLACK,
  },
  link: {
    color: Colors.ACTIVE_TINT,
  },
  code_inline: {
    backgroundColor: Colors.BACKGROUND,
  },
})
