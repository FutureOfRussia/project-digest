import { height, totalSize, width } from 'react-native-dimension'

const denominator = height(1) / width(1) > 2 ? 9.870217829409846 : 7
const px = (num) => num * (totalSize(1) / denominator)

export {
  width,
  height,
  totalSize,
  px,
}
