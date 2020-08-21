import { AppState } from '../Types/Models'

const initialState: AppState = {
  locale: 'en',
  showWelcome: true,
}

export default {
  state: initialState,
  reducers: {
    setAppState: (state: AppState, payload: object): AppState => ({ ...state, ...payload }),
  },
}
