interface Images {
  [key: string]: number
}

const images: Images = {
  splash: require('../../assets/images/splash.png'),
  icon: require('../../assets/images/icon.png'),
  favicon: require('../../assets/images/favicon.png'),
  placeholder: require('../../assets/images/placeholder.png'),
  for: require('../../assets/images/FoR.jpg'),
  forQ: require('../../assets/images/FoRq.jpg'),
  gradient: require('../../assets/images/gradient.png'),
  cards: require('../../assets/images/cards.png'),
  onepunch: require('../../assets/images/onepunch.jpg'),
  flower1: require('../../assets/images/flower-1.png'),
  flower2: require('../../assets/images/flower-2.png'),
  flower3: require('../../assets/images/flower-3.png'),
  flower4: require('../../assets/images/flower-4.png'),
}

const list = (() => {
  const mapImages: Array<number> = []
  const getValues = (obj: any): void => Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === 'number' || typeof obj[key] === 'string') {
      mapImages.push(obj[key])
    } else {
      getValues(obj[key])
    }
  })
  getValues(images)
  return mapImages
})()

const getKeyValue = <U extends keyof T, T extends object>(key: U) => (obj: T) => obj[key]

const getImage = (key: keyof Images) => getKeyValue<keyof Images, Images>(key)(images)

export default {
  list,
  getImage,
}
