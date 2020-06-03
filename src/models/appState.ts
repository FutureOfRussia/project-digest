export interface AppStateType {
  locale: 'ru' | 'en'
}

export interface AppStateDispatchType {
  appState: {
    setAppState: (payload: object) => AppStateType
  }
}

const initialState: AppStateType = {
  locale: 'en',
}

export const appState = {
  state: initialState,
  reducers: {
    setAppState: (state: AppStateType, payload: object): AppStateType => ({ ...state, ...payload }),
  },
}
