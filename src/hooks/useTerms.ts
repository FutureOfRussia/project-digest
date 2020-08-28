import { useSelector } from 'react-redux'
import Languages from '../../assets/languages'
import { State } from '../types/Models'

export default function useTerms() {
  const { locale } = useSelector((state: State) => state.appState)

  return Languages[locale]
}
