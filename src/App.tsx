import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ToastContainer } from 'react-toastify'
import { Container } from '@material-ui/core'
import Home from './pages/home/Home'
import Layout from './layout/Layout'

import { AppState, RootState } from './utils/types'
import './styles/App.scss'
import 'react-toastify/dist/ReactToastify.css'
import { changeTheme } from './store/actions'

const App: FC = (): JSX.Element => {
  const { darkTheme } = useSelector((s: RootState): AppState => s.app)
  const dsp = useDispatch()

  useEffect(checkLocalStorage, [])
  useEffect(addDarkTheme, [darkTheme])

  return (
    <div className="App">
      <Layout>
        <Container maxWidth="xl">
          <ToastContainer />
          <Home />
        </Container>
      </Layout>
    </div>
  )

  function checkLocalStorage() {
    if (localStorage.getItem('theme')) {
      dsp(changeTheme())
    }
  }

  function addDarkTheme() {
    if (darkTheme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.removeItem('theme')
    }
  }
}

export default App
