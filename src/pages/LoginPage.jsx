import React, { Fragment } from 'react'
import Header from '../components/Header'
import Login from '../components/Login'

const LoginPage = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <Login>
        { children }
      </Login>
    </Fragment>
  )
}

export default LoginPage;
