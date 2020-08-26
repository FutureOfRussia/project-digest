import { StyleSheet } from 'react-native'
import { Colors } from '../../constants'
import { height, px, width } from '../../helpers/Dimensions'
import { shadow } from '../../helpers/Utilities'
import { black, white } from '../../helpers/Colors'

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
  inputActive: {
    width: '100%',
    height: px(50),
    borderRadius: px(5),
    borderWidth: px(1.5),
    borderColor: Colors.ACTIVE_TINT,
    marginVertical: px(10),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: px(10),
    marginBottom: px(50),
  },
  activeBtnText: {
    fontSize: px(14),
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.ACTIVE_TINT,
  },
  button: {
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
  logosBlock: {
    marginTop: height(5),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  singUpBtnBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height(5),
    ...shadow({ shadowOpacity: 0.5 }),
  },
  signUpBtnText: {
    fontSize: px(14),
    fontWeight: 'bold',
    textAlign: 'center',
    color: black(0.85),
  },
  signUpBtn: {
    marginLeft: px(3),
  },
})
