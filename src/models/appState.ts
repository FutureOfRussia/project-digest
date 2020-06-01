export interface AppStateType {
  language: 'ru' | 'en'
}

export interface AppStateDispatchType {
  main: {
    setAppState: (payload: object) => AppStateType
  }
}

const initialState: AppStateType = {
  language: 'ru',
}

export const appState = {
  state: initialState,
  reducers: {
    setAppState: (state: AppStateType, payload: object): AppStateType => ({ ...state, ...payload }),
  },
}
