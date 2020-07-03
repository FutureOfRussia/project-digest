import useColorScheme from './useColorScheme'
import Colors from '../constants/Colors'

export default function useThemeColor(
  props: { light?: string, dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
) {
  const theme = useColorScheme()
  const colorFromProps = props[theme]

  if (colorFromProps) {
    return colorFromProps
  }
  return Colors[theme][colorName]
}
