import { useSelector } from 'react-redux'
import Languages from '../../assets/languages'

const hitSlop = (offset) => ({
  top: offset.top || offset,
  left: offset.left || offset,
  bottom: offset.bottom || offset,
  right: offset.right || offset,
})

const useTerms = () => {
  const { language } = useSelector((state) => state.appState)

  return Languages[language]
}

export {
  hitSlop,
  useTerms,
}
