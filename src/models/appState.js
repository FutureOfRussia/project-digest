const initialState = {
  language: 'ru',
}

export default {
  state: initialState,
  reducers: {
    setAppState: (state, payload) => ({ ...state, ...payload }),
  },
}
