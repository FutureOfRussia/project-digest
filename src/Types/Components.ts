import {
  Text as DefaultText, TextStyle, View as DefaultView, ViewStyle,
} from 'react-native'

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
  style: ViewStyle
  onPress?: () => void
  children: JSX.Element | Array<JSX.Element>
}

export interface ThemeProps {
  lightColor?: string
  darkColor?: string
}

export type ViewProps = ThemeProps & DefaultView['props']

export type TextProps = ThemeProps & DefaultText['props'] & { fontFamily?: TextStyle['fontFamily'] }