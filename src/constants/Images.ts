const images = {
  splash: require('../../assets/splash.png'),
  placeholder: require('../../assets/placeholder.png'),
  for: require('../../assets/FoR.jpg'),
  forQ: require('../../assets/FoRq.jpg'),
  gradient: require('../../assets/gradient.png'),
  cards: require('../../assets/cards.png'),
  onepunch: require('../../assets/onepunch.jpg'),
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
