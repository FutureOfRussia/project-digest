export interface AppState {
  locale: 'ru' | 'en'
  showWelcome: boolean
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
