import { StyleSheet } from 'react-native'
import { shadow } from '../../helpers/Utilities'
import { px } from '../../helpers/Dimensions'
import { black } from '../../helpers/Colors'
import { Colors } from '../../constants'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    padding: px(10),
    borderRadius: px(20),
    borderBottomLeftRadius: px(60),
    borderBottomRightRadius: px(60),
    borderColor: Colors.WHITE,
    borderWidth: px(1),
    ...shadow(),
  },
  titleBlock: {
    marginBottom: px(20),
    paddingHorizontal: px(5),
  },
  title: {
    color: black(0.8),
    fontSize: px(28),
    fontWeight: '600',
    ...shadow(),
  },
  rgbBlock: {
    paddingHorizontal: px(5),
    marginBottom: px(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  rgb: {
    fontSize: px(10),
    marginRight: px(2.5),
    ...shadow(),
  },
  colorBlock: {
    marginTop: px(20),
    width: px(300),
    height: px(300),
    borderRadius: px(60),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.WHITE,
    borderWidth: px(1),
    ...shadow(),
  },
  hueBlock: {
    borderRadius: px(112.5),
    borderColor: Colors.WHITE,
    borderWidth: px(1),
    backgroundColor: Colors.WHITE,
    ...shadow(),
  },
  hue: {
    width: px(225),
    height: px(225),
    borderRadius: px(112.5),
  },
})
