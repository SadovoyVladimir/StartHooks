import React from 'react'
import CardWrapper from '../../common/Card'

export default function withFunctions(SimpleComponent) {
  const isAuth = localStorage.getItem('auth')
  const onLogin = () => {
    localStorage.setItem('auth', 'token')
  }
  const onLogout = () => {
    localStorage.removeItem('auth', 'token')
  }

  return (props) => {
    return (
      <CardWrapper>
        <SimpleComponent
          isAuth={!!isAuth}
          onLogin={onLogin}
          onLogout={onLogout}
          {...props}
        />
      </CardWrapper>
    )
  }
}
