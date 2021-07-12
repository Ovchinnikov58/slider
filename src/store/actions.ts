import {
  HIDE_LOADER,
  REQUEST_POSTS,
  SHOW_LOADER,
  CHANGE_LOAD_VALUE,
  RESET,
  CHANGE_THEME,
  CHANGE_START_VALUE,
  IS_MODAL_OPEN,
} from './types'

export function changeTheme() {
  return {
    type: CHANGE_THEME,
  }
}

export function setIsModalOpen(value: boolean) {
  return {
    type: IS_MODAL_OPEN,
    value,
  }
}

export function changeLoadValue() {
  return {
    type: CHANGE_LOAD_VALUE,
  }
}

export function changeStartValue(value: number, id?: string) {
  return {
    type: CHANGE_START_VALUE,
    value,
    id,
  }
}

export function showLoader() {
  return {
    type: SHOW_LOADER,
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  }
}

export function fetchPosts(value: number) {
  return {
    type: REQUEST_POSTS,
    value,
  }
}

export function resetStore() {
  return {
    type: RESET,
  }
}
