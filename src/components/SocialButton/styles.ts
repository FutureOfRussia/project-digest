import { StyleSheet } from 'react-native'
import { shadow } from '../../helpers/Utilities'
import { px } from '../../helpers/Dimensions'

export default StyleSheet.create({
  container: {
    marginHorizontal: px(7.5),
    ...shadow({ shadowOpacity: 0.3 }),
  },
  content: {
    width: px(50),
    height: px(50),
    borderRadius: px(25),
    justifyContent: 'center',
    alignItems: 'center',
  },
})
