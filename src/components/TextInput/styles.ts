import { StyleSheet } from 'react-native'
import { px } from '../../helpers/Dimensions'
import { black } from '../../helpers/Colors'
import { Colors } from '../../constants'

export default StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: px(10),
  },
  content: {
    width: '100%',
    height: px(50),
    borderRadius: px(5),
    borderWidth: px(1.5),
    borderColor: black(0.1),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: px(15),
  },
  input: {
    flex: 1,
    height: '100%',
    marginHorizontal: px(10),
    fontSize: px(16),
  },
  validText: {
    fontSize: px(12),
    color: Colors.ACTIVE_TINT,
    paddingHorizontal: px(15),
    marginTop: px(5),
  },
})
