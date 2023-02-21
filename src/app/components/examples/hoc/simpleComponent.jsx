import React from 'react'
import PropTypes from 'prop-types'

export default function SimpleComponent({ onLogin, onLogout, isAuth }) {
  const handleClick = () => {
    isAuth ? onLogout() : onLogin()
  }

  return (
    <>
      <button className='btn btn-primary' onClick={handleClick}>
        {isAuth ? 'Выйти из сиситемы' : 'Войти'}
      </button>
    </>
  )
}

SimpleComponent.propTypes = {
  onLogin: PropTypes.func,
  onLogout: PropTypes.func,
  isAuth: PropTypes.bool
}
