import React, { useCallback, useEffect, useRef, useState } from 'react'
import CardWrapper from '../../common/Card'
import SmallTitle from '../../common/typografy/smallTitle'

const UseCallBackExample = () => {
  const [data, setData] = useState({})
  const withOutCallback = useRef(0)
  const withCallback = useRef(0)

  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }

  // WithOut CallBack
  const validateWithOutCallback = (data) => {
    // console.log(data)
  }
  useEffect(() => {
    withOutCallback.current++
  }, [validateWithOutCallback])

  // With CallBack
  const validateWithCallback = useCallback((data) => {
    // console.log(data)
  }, [])
  useEffect(() => {
    withCallback.current++
  }, [validateWithCallback])

  useEffect(() => {
    validateWithOutCallback(data)
    validateWithCallback(data)
  }, [data])

  return (
    <CardWrapper>
      <SmallTitle>Example</SmallTitle>
      <p>Render withOutCallback: {withOutCallback.current}</p>
      <p>Render withCallback: {withCallback.current}</p>
      <label htmlFor='email' className='label'>
        Email
      </label>
      <input
        value={data.email || ''}
        name='email'
        type='email'
        id='email'
        className='form-control'
        onChange={handleChange}
      />
    </CardWrapper>
  )
}

export default UseCallBackExample
