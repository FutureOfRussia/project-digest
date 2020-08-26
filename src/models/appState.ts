import { AppState } from '../types/Models'

const initialState: AppState = {
  locale: 'en',
  logIn: false,
  session: null,
}

export default {
  state: initialState,
  reducers: {
    setAppState: (state: AppState, payload: object): AppState => ({ ...state, ...payload }),
  },
}
