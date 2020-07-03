import { Platform } from 'react-native'
import { Shadow } from '../Types/Utilities'
import { black } from './Colors'

export const hitSlop = (offset: number) => ({
  top: offset,
  left: offset,
  bottom: offset,
  right: offset,
})

export const shadow = ({
  shadowColor, shadowOffset, shadowRadius, shadowOpacity, elevation,
}: Shadow = {}) => Platform.select({
  ios: {
    shadowColor: shadowColor || black(0.5),
    shadowOffset: { width: shadowOffset?.width || 0, height: shadowOffset?.height || 0 },
    shadowRadius: shadowRadius || 10,
    shadowOpacity: shadowOpacity || 0.5,
  },
  android: { elevation: elevation || 10 },
})
