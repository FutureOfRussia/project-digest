import Animated from 'react-native-reanimated'

export interface Color {
  r: number
  g: number
  b: number
}

export interface HSVSelectorProps {
  onSave?: (color: Color) => void
  title?: string
}

export interface PickerProps {
  hue: Animated.Value<number>
  saturation: Animated.Value<number>
  size: number
  state: Animated.Value<number>
}

export interface SliderProps {
  value: Animated.Value<number>
  color: Animated.Node<number>
  state: Animated.Value<number>
}
