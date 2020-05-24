import { StyleSheet } from 'react-native'
import { shadow } from '../../../../helpers/Utilities'
import { px } from '../../../../helpers/Dimensions'
import { Colors } from '../../../../constants'

export default StyleSheet.create({
  container: {
    zIndex: 30,
  },
  cursor: {
    zIndex: 20,
    position: 'absolute',
    width: px(30),
    height: px(30),
    backgroundColor: Colors.white(),
    borderRadius: px(15),
    ...shadow(),
  },
})
