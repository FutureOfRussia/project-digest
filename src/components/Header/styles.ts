import { StyleSheet } from 'react-native'
import { px } from '../../helpers/Dimensions'
import { black } from '../../helpers/Colors'
import { Colors } from '../../constants'

export default StyleSheet.create({
  container: {
    zIndex: 20,
    position: 'absolute',
    width: '100%',
    height: px(85),
    backgroundColor: Colors.WHITE,
    borderBottomWidth: px(0.5),
    borderBottomColor: black(0.3),
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: px(10),
  },
  title: {
    color: black(0.8),
    fontSize: px(18),
    fontWeight: '600',
  },
})
