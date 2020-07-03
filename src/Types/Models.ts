export interface AppState {
  locale: 'ru' | 'en'
}

export interface AppStateDispatch {
  appState: {
    setAppState: (payload: object) => AppState
  }
}

export interface State {
  appState: AppState
}

export interface Dispatch extends AppStateDispatch {}
