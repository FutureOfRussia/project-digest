import { StyleSheet } from 'react-native'
import { shadow } from '../../helpers/Utilities'
import { px } from '../../helpers/Dimensions'
import { black } from '../../helpers/Colors'

export default StyleSheet.create({
  content: {
    paddingHorizontal: px(20),
    paddingBottom: px(30),
  },
  header: {
    flexDirection: 'row',
    marginTop: px(60),
    marginBottom: px(15),
  },
  headerLeftSection: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  headerTitle: {
    fontSize: px(32),
    fontWeight: '700',
    color: black(0.8),
    ...shadow(),
  },
  headerRightSection: {
    borderRadius: px(30),
    ...shadow(),
  },
  headerAvatar: {
    width: px(60),
    height: px(60),
    borderRadius: px(30),
  },
})
