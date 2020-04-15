import { StyleSheet } from 'react-native'
import { shadow } from '../../../../helpers/Utilities'
import { px } from '../../../../helpers/Dimensions'
import { Colors } from '../../../../constants'

export default StyleSheet.create({
  container: {
    width: px(300),
    height: px(50),
    borderRadius: px(15),
    borderColor: Colors.white(),
    borderWidth: px(1),
    ...shadow(),
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: px(15),
    justifyContent: 'center',
    paddingHorizontal: px(10),
  },
  cursor: {
    zIndex: 20,
    width: px(30),
    height: px(30),
    borderRadius: px(15),
    backgroundColor: Colors.white(),
    ...shadow(),
  },
})
