import { StyleSheet } from 'react-native'
import { Colors } from '../../constants'
import { px } from '../../helpers/Dimensions'

export default StyleSheet.create({
  substrate: {
    flex: 1,
    backgroundColor: Colors.black(0.8),
  },
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor: Colors.white(),
  },
  imageContainer: {
    zIndex: 20,
  },
  image: {
    width: '100%',
    height: px(260),
    resizeMode: 'cover',
  },
  content: {
    paddingVertical: px(30),
    paddingHorizontal: px(20),
  },
  name: {
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: px(36),
    fontWeight: 'bold',
    color: Colors.black(0.85),
  },
  description: {
    marginTop: px(10),
  },
  text: {
    fontSize: px(16),
    fontWeight: '500',
    color: Colors.black(0.6),
  },
})
