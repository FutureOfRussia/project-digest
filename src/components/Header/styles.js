import { StyleSheet } from 'react-native'
import { px } from '../../helpers/Dimensions'
import { Colors } from '../../constants'

export default StyleSheet.create({
  container: {
    zIndex: 20,
    position: 'absolute',
    width: '100%',
    height: px(85),
    backgroundColor: Colors.white(),
    borderBottomWidth: px(0.5),
    borderBottomColor: Colors.black(0.3),
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: px(10),
  },
  title: {
    color: Colors.black(0.8),
    fontSize: px(18),
    fontWeight: '600',
  },
})
