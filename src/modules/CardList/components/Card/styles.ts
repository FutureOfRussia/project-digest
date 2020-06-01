import { StyleSheet } from 'react-native'
import { shadow } from '../../../../helpers/Utilities'
import { px } from '../../../../helpers/Dimensions'
import { black } from '../../../../helpers/Colors'
import { Colors } from '../../../../constants'

export default StyleSheet.create({
  container: {
    marginVertical: px(20),
    height: px(400),
  },
  background: {
    backgroundColor: Colors.WHITE,
    ...StyleSheet.absoluteFillObject,
    ...shadow(),
  },
  image: {
    height: px(260),
    width: '100%',
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    padding: px(20),
  },
  name: {
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: px(32),
    fontWeight: 'bold',
    color: black(0.85),
  },
  description: {
    flex: 1,
    marginTop: px(10),
  },
  text: {
    fontSize: px(16),
    fontWeight: '500',
    color: black(0.6),
  },
})
