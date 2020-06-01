import { main, MainDispatchType, MainStateType } from './main'
import { appState, AppStateDispatchType, AppStateType } from './appState'


export interface State {
  main: MainStateType
  appState: AppStateType
}

export interface Dispatch {
  main: MainDispatchType
  appState: AppStateDispatchType
}

export default {
  main,
  appState,
}
