import {
  Text as DefaultText, TextInput as DefaultTextInput, TextStyle, View as DefaultView, ViewStyle,
} from 'react-native'
import Animated from 'react-native-reanimated'

export interface CardProps {
  card: {
    image: number
    title: string
    description: string
  }
  onPress: () => void
}

export interface LinkProps {
  icon: string
  url: string
  title: string
}

export interface BounceButtonProps {
  style?: ViewStyle | Array<ViewStyle> | Animated.AnimateStyle<any>
  onPress?: () => void
  children?: JSX.Element | Array<JSX.Element>
}

export interface ThemeProps {
  lightColor?: string
  darkColor?: string
}

export type ViewProps = ThemeProps & DefaultView['props']

export type TextProps = ThemeProps & DefaultText['props'] & {
  fontFamily?: TextStyle['fontFamily'], fontSize?: TextStyle['fontSize']
}

export interface DotProps {
  currentIndex: Animated.Node<number>
  index: number
  color?: string
}

export interface SlideProps {
  title: string,
  right?: boolean,
}

export interface CheckBoxProps {
  value: boolean
  label?: string
  checkColor?: string
  boxColor?: string
  onPress?: () => void
}

export interface TextInputProps {
  icon: string
  activeTint?: string
  value: string
  onChangeText?: (text: string) => void
  valid?: boolean
  inputProps?: DefaultTextInput['props']
}

export interface SocialButtonProps {
  type: string
  onPress?: () => void
}
