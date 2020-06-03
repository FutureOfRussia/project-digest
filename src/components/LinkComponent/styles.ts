import { StyleSheet } from 'react-native'
import { px } from '../../helpers/Dimensions'
import { Colors } from '../../constants'

export default StyleSheet.create({
  container: {
    marginTop: px(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  link: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: px(10),
  },
  linkText: {
    fontSize: px(18),
    fontWeight: '400',
    color: Colors.ACTIVE_TINT,
    textDecorationLine: 'underline',
  },
})
