import { StyleSheet } from 'react-native'
import { height, px, width } from '../../helpers/Dimensions'
import { black, white } from '../../helpers/Colors'
import { shadow } from '../../helpers/Utilities'
import { Colors } from '../../constants'

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
  container: {
    flex: 1,
    paddingHorizontal: width(10),
    justifyContent: 'center',
    paddingTop: height(20),
    backgroundColor: Colors.BACKGROUND,
  },
  backgroundImage: {
    width: width(100),
    height: height(100),
    ...StyleSheet.absoluteFillObject,
  },
  body: {
    width: '100%',
    borderRadius: px(30),
    padding: px(20),
    ...shadow({ shadowOpacity: 0.3 }),
  },
  title: {
    fontSize: px(32),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: px(15),
  },
  subtitle: {
    fontSize: px(16),
    textAlign: 'center',
    marginBottom: px(30),
  },
  button: {
    marginTop: px(40),
    width: '100%',
    height: px(50),
    backgroundColor: Colors.ACTIVE_TINT,
    borderRadius: px(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: px(16),
    fontWeight: 'bold',
    textAlign: 'center',
    color: white(),
  },
  socialBlock: {
    marginTop: height(5),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  singInBtnBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height(5),
    ...shadow({ shadowOpacity: 0.5 }),
  },
  signInBtnText: {
    fontSize: px(14),
    fontWeight: 'bold',
    textAlign: 'center',
    color: black(0.85),
  },
  signInBtn: {
    marginLeft: px(3),
  },
  signInActiveBtnText: {
    fontSize: px(14),
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.ACTIVE_TINT,
  },
})
