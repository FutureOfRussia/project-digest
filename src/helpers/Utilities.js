import { useSelector } from 'react-redux'
import { Platform } from 'react-native'
import Languages from '../../assets/languages'
import { Colors } from '../constants'

const hitSlop = (offset) => ({
  top: offset.top || offset,
  left: offset.left || offset,
  bottom: offset.bottom || offset,
  right: offset.right || offset,
})

const useTerms = () => {
  const { language } = useSelector((state) => state.appState)

  return Languages[language]
}

const shadow = ({
  shadowColor, shadowOffset, shadowRadius, shadowOpacity, elevation,
} = {}) => Platform.select({
  ios: {
    shadowColor: shadowColor || Colors.black(0.5),
    shadowOffset: { width: shadowOffset?.width || 0, height: shadowOffset?.height || 0 },
    shadowRadius: shadowRadius || 10,
    shadowOpacity: shadowOpacity || 0.5,
  },
  android: { elevation: elevation || 10 },
})

export {
  hitSlop,
  useTerms,
  shadow,
}
