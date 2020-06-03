import { appState, AppStateDispatchType, AppStateType } from './appState'

export interface State {
  appState: AppStateType
}

export interface Dispatch extends AppStateDispatchType {}

export default {
  appState,
}
