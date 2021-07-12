import { FETCH_POSTS, CHANGE_LOAD_VALUE, RESET, CHANGE_START_VALUE } from '../types'
import { Post } from '../../utils/types'

const initialState = {
  fetchedPosts: [],
  list: [],
  loadValue: 30,
  startValue: 0,
  dist: 0,
}

// eslint-disable-next-line
export const postsReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case FETCH_POSTS:
      // eslint-disable-next-line
      const result = action.payload.data.children.map((payloadItem: any): Post | null => {
          if (payloadItem.data?.url.includes('.jpg')) {
            return {
              url: payloadItem.data?.url,
              id: payloadItem.data?.id,
              title: payloadItem.data?.title,
            }
          }
          return null
        })
        // eslint-disable-next-line
        .filter((payloadItem: any) => payloadItem)
      return {
        ...state,
        fetchedPosts: result,
        dist: action.payload.data.dist,
      }
    case CHANGE_LOAD_VALUE:
      return { ...state, loadValue: state.loadValue + 1 }
    case CHANGE_START_VALUE:
      return { ...state, startValue: state.startValue + action.value }
    case RESET:
      return initialState
    default:
      return state
  }
}
