import { StyleSheet } from 'react-native'
import { px } from '../../helpers/Dimensions'
import { Colors } from '../../constants'

export default StyleSheet.create({
  headerImage: {
    width: '100%',
    height: px(250),
  },
  content: {
    flex: 1,
    paddingHorizontal: px(20),
    backgroundColor: Colors.TRANSPARENT,
  },
  title: {
    marginTop: px(20),
    fontSize: px(28),
    fontWeight: '700',
  },
  text: {
    fontSize: px(18),
    fontWeight: '400',
    marginLeft: px(10),
  },
  textBlock: {
    marginTop: px(10),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.TRANSPARENT,
  },
})
