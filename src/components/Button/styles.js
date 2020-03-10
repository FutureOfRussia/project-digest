import { StyleSheet } from 'react-native'
import { Colors } from '../../constants'
import { px } from '../../helpers/Dimensions'

export default StyleSheet.create({
  button: {
    width: '100%',
    height: px(45),
    borderRadius: px(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledBtn: {
    backgroundColor: Colors.disabled,
  },
  text: {
    textAlign: 'center',
    color: Colors.white(),
    fontSize: px(14),
  },
  disabledText: {
    color: Colors.black(),
  },
  icon: {
    height: px(20),
  },
})
