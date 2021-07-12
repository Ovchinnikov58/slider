import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import './header.scss'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import { changeTheme } from '../../store/actions'
import { AppState, RootState } from '../../utils/types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
)

const Header: FC = (): JSX.Element => {
  const classes = useStyles()
  const { darkTheme } = useSelector((s: RootState): AppState => s.app)
  const dsp = useDispatch()

  return (
    <div className={classes.root}>
      <AppBar position="static" className="header">
        <Toolbar>
          <div className="sider-menu__theme">
            <FormControlLabel
              control={
                <Switch checked={darkTheme} onChange={handleChangeSwitch} name="switchChecked" color="primary" />
              }
              label="Тёмная тема"
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )

  function handleChangeSwitch() {
    dsp(changeTheme())
  }
}

export default Header
