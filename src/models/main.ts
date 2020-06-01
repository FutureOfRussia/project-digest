export interface MainStateType {
  title: string
}

export interface MainDispatchType {
  main: {
    changeTitle: (payload: string) => MainStateType
  }
}

const initialState: MainStateType = {
  title: "It's React Native skeleton project!",
}

export const main = {
  state: initialState,
  reducers: {
    changeTitle: (state: MainStateType, payload: string): MainStateType => ({ ...state, title: payload }),
  },
  effects: (dispatch: MainDispatchType) => ({
    changeTitleAsync: async (payload: string) => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      dispatch.main.changeTitle(payload)
    },
  }),
}
