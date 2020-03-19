import { StyleSheet, Platform } from 'react-native'
import { px } from '../../helpers/Dimensions'
import { Colors } from '../../constants'

export default StyleSheet.create({
  container: {
    marginVertical: px(20),
    height: px(400),
  },
  background: {
    backgroundColor: Colors.white(),
    ...StyleSheet.absoluteFillObject,
    ...Platform.select({
      ios: {
        shadowColor: Colors.black(0.5),
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        shadowOpacity: 0.4,
      },
      android: {
        elevation: 10,
      },
    }),
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
    color: Colors.black(0.85),
  },
  description: {
    flex: 1,
    marginTop: px(10),
  },
  text: {
    fontSize: px(16),
    fontWeight: '500',
    color: Colors.black(0.6),
  },
})
