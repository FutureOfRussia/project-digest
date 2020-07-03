import { Dimensions } from 'react-native'

const handleSize = (num: number): number => {
  if (num <= 0) return 0
  if (num > 100) return 1

  return num / 100
}

const myWidth = Dimensions.get('window').width
const myHeight = Dimensions.get('window').height

export const width = (num: number): number => myWidth * handleSize(num)
export const height = (num: number): number => myHeight * handleSize(num)

const denominator = height(1) / width(1) > 2 ? 9.870217829409846 : 8.870217829409846

export const totalSize = (num: number): number => (
  Math.sqrt((myHeight * myHeight) + (myWidth * myWidth)) * handleSize(num)
)
export const px = (num: number): number => num * (totalSize(1) / denominator)
