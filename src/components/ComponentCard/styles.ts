import { StyleSheet } from 'react-native'
import { shadow } from '../../helpers/Utilities'
import { px } from '../../helpers/Dimensions'
import { black } from '../../helpers/Colors'
import { Colors } from '../../constants'

export default StyleSheet.create({
  container: {
    marginVertical: px(15),
    width: '100%',
    height: px(300),
    backgroundColor: Colors.WHITE,
    borderRadius: px(20),
    justifyContent: 'space-between',
    ...shadow({ shadowOffset: { height: px(10) } }),
  },
  imageBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: px(20),
    backgroundColor: black(0.3),
  },
  topBlock: {
    padding: px(20),
  },
  title: {
    fontSize: px(32),
    fontWeight: '700',
    color: Colors.WHITE,
    ...shadow(),
  },
  bottomBlock: {
    width: '100%',
    padding: px(20),
    justifyContent: 'flex-end',
    backgroundColor: black(0.4),
    borderBottomLeftRadius: px(20),
    borderBottomRightRadius: px(20),
  },
  description: {
    fontSize: px(18),
    fontWeight: '400',
    color: Colors.WHITE,
  },
})
