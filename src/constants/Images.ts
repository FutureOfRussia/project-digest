const images = {
  splash: require('../../assets/images/splash.png'),
  icon: require('../../assets/images/icon.png'),
  favicon: require('../../assets/images/favicon.png'),
  placeholder: require('../../assets/images/placeholder.png'),
  for: require('../../assets/images/FoR.jpg'),
  forQ: require('../../assets/images/FoRq.jpg'),
  gradient: require('../../assets/images/gradient.png'),
  cards: require('../../assets/images/cards.png'),
  onepunch: require('../../assets/images/onepunch.jpg'),
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

export default {
  ...images,
  list,
}
