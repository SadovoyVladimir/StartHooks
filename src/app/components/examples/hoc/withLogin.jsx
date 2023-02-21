import React from 'react'
import SmallTitle from '../../common/typografy/smallTitle'

export default function withLogin(Component) {
  return (props) => {
    const isLogin = localStorage.getItem('auth')
    return (
      <>{isLogin ? <Component {...props} /> : <SmallTitle>Auth</SmallTitle>}</>
    )
  }
}
