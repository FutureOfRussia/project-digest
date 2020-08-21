import { StyleSheet } from 'react-native'
import { height, px, width } from '../../helpers/Dimensions'
import { shadow } from '../../helpers/Utilities'
import { Colors } from '../../constants'

export default StyleSheet.create({
  dots: {
    height: height(2.5),
    width: width(20),
    position: 'absolute',
    top: height(61.25),
    left: width(40),
    borderRadius: height(1.25),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: px(15),
    ...shadow({ shadowOpacity: 0.3 }),
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    width: width(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    top: height(65),
    left: width(10),
    position: 'absolute',
    width: width(80),
    borderRadius: px(30),
    padding: px(30),
    alignItems: 'center',
    justifyContent: 'space-between',
    ...shadow({ shadowOpacity: 0.3 }),
  },
  footerText: {
    backgroundColor: Colors.TRANSPARENT,
    width: '100%',
    height: height(20),
  },
  title: {
    fontWeight: '600',
    fontSize: px(28),
    textAlign: 'center',
    marginBottom: px(20),
  },
  subtitle: {
    flex: 1,
    fontSize: px(16),
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
  },
  button: {
    width: '100%',
    height: px(50),
    borderRadius: px(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: px(16),
    fontWeight: '600',
    textAlign: 'center',
  },
})
