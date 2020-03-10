import { height, totalSize, width } from 'react-native-dimension'

const denominator = height(1) / width(1) > 2 ? 1 : 1
const px = (num) => num * (totalSize(1) / denominator)

export {
  width,
  height,
  totalSize,
  px,
}
