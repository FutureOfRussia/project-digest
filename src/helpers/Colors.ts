const white = (opacity = 1) => `rgba(255, 255, 255, ${opacity})`
const black = (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
const rgb = (r = 0, g = 0, b = 0) => `rgb(${r}, ${g}, ${b})`
const rgba = (r = 0, g = 0, b = 0, a = 0) => `rgba(${r}, ${g}, ${b}, ${a})`

export {
  white,
  black,
  rgb,
  rgba,
}
