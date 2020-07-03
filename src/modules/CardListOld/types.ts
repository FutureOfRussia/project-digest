import { ImageSourcePropType } from 'react-native'
import Reanimated from 'react-native-reanimated'
import { RouteProp } from '@react-navigation/native'

export interface CardType {
  id: string
  name: string
  photo: ImageSourcePropType
  quote: string
  description: string
}

export interface CardProps {
  card: CardType
  velocity: Reanimated.Value<number>
  onPress: () => void
}

export type RootStackParamList = {
  List: undefined
  Details: {
    sharedElements: Array<string | object>
    card: CardType
  }
}

export type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>
