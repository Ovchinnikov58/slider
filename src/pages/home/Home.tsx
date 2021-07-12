import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import LinearProgress from '@material-ui/core/LinearProgress'
import Slider from '../../components/slider/Slider'
import { fetchPosts } from '../../store/actions'
import { RootState, AppState, PostsState } from '../../utils/types'
import './home.scss'

const Home: FC = (): JSX.Element => {
  const { loading } = useSelector((s: RootState): AppState => s.app)
  const { fetchedPosts, loadValue } = useSelector((s: RootState): PostsState => s.posts)
  const dsp = useDispatch()

  useEffect(() => getPosts(loadValue), [loadValue])

  return <div className="home">{loading && !fetchedPosts.length ? <LinearProgress /> : <Slider listLength={10} />}</div>

  function getPosts(n: number) {
    dsp(fetchPosts(n))
  }
}

export default Home
