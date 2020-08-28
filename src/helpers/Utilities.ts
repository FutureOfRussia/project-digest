import { Platform } from 'react-native'
import { Shadow } from '../types/Utilities'
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

export const validateEmail = (email: string) => (
  // eslint-disable-next-line max-len
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    .test(email)
)

export const validatePassword = (password: string) => (
  /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{6,}$/
    .test(password)
)
