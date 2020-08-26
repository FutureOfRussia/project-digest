import { StyleSheet } from 'react-native'
import { px } from '../../helpers/Dimensions'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: {
    width: px(25),
    height: px(25),
    borderRadius: px(5),
    marginRight: px(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: px(14),
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
