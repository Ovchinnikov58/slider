import { HIDE_LOADER, SHOW_LOADER, RESET, CHANGE_THEME, IS_MODAL_OPEN } from '../types'

const initialState = {
  loading: false,
  darkTheme: false,
  isModalOpen: false,
}

// eslint-disable-next-line
export const appReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true }
    case HIDE_LOADER:
      return { ...state, loading: false }
    case CHANGE_THEME:
      return { ...state, darkTheme: !state.darkTheme }
    case IS_MODAL_OPEN:
      return { ...state, isModalOpen: action.value }
    case RESET:
      return initialState
    default:
      return state
  }
}
