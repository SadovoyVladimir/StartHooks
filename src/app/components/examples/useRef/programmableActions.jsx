import React, { useRef } from 'react'
import CardWrapper from '../../common/Card'
import Divider from '../../common/divider'
import SmallTitle from '../../common/typografy/smallTitle'
const ProgrammableActionsExample = () => {
  const inputRef = useRef()
  const handleClick = () => {
    console.log(inputRef.current.clientWidth)
    inputRef.current.focus()
  }
  const handleChangeWidth = () => {
    inputRef.current.style.width = '500px'
  }
  return (
    <CardWrapper>
      <SmallTitle className='card-title'>
        Программируемые действия и свойства
      </SmallTitle>
      <Divider />
      <label htmlFor='email' className='label'>
        Email
      </label>
      <input ref={inputRef} type='email' id='email' className='form-control' />
      <button className='btn btn-primary' onClick={handleClick}>
        Фокус input
      </button>
      <button className='btn btn-secondary' onClick={handleChangeWidth}>
        Изменить ширину
      </button>
    </CardWrapper>
  )
}

export default ProgrammableActionsExample
