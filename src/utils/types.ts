export type RootState = {
  app: AppState
  posts: PostsState
}

export type AppState = {
  loading: boolean
  isModalOpen: boolean
  darkTheme: boolean
}

export type PostsState = {
  fetchedPosts: Array<Post>
  list: Array<Post>
  loadValue: number
  startValue: number
  dist: number
}

export type Post = {
  url: string
  id: string
  title: string
}
