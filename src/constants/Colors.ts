import { Platform } from 'react-native'
import { black, white } from '../helpers/Colors'

export default {
  light: {
    text: black(0.85),
    background: Platform.select({ ios: white(0.85), android: white() }),
    input: black(0.1),
  },
  dark: {
    text: white(),
    background: Platform.select({ ios: black(0.85), android: black() }),
    input: white(0.75),
  },
  WHITE: '#FFFFFF',
  BLACK: '#000000',
  OAK_SHAVING: '#f0d8c0',
  QUARTZ_PINK: '#f0a8a8',
  ESCARGOT: '#fff0d8',
  YELLOW_EMULSION: '#f0f0d8',
  BACKGROUND: '#EDE9E6',
  ACTIVE_TINT: '#C20A54',
  INACTIVE_TINT: '#F5F4F5',
  TRANSPARENT: 'transparent',
}
