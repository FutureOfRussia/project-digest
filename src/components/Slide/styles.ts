import { StyleSheet } from 'react-native'
import { px, width } from '../../helpers/Dimensions'
import { shadow } from '../../helpers/Utilities'

export default StyleSheet.create({
  container: {
    height: '100%',
    width: width(100),
  },
  titleContainer: {
    height: px(100),
    justifyContent: 'center',
  },
  title: {
    fontSize: px(100),
    lineHeight: px(100),
    fontWeight: 'bold',
    textAlign: 'center',
    ...shadow({ shadowOpacity: 0.3 }),
  },
})
