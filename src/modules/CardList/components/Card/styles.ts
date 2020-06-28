import { StyleSheet } from 'react-native'
import { shadow } from '../../../../helpers/Utilities'
import { px } from '../../../../helpers/Dimensions'

export default StyleSheet.create({
  container: {
    width: '100%',
    height: px(200),
    marginVertical: px(15),
    borderRadius: px(20),
    ...shadow({ shadowOpacity: 0.2 }),
  },
  gradient: {
    flex: 1,
    borderRadius: px(20),
  },
})
