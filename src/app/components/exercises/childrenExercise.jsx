import React from 'react'
import CollapseWrapper from '../common/collapse'
import PropTypes from 'prop-types'

const WrapperComponent = ({ children }) => {
  const childrenArray = React.Children.toArray(children)
  return childrenArray.map(child => {
    return React.cloneElement(child, { num: childrenArray.indexOf(child) })
  })
}

WrapperComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

const ChildrenExercise = () => {
  return (
    <CollapseWrapper title='Упражнение'>
      <p className='mt-3'>
        У вас есть компоненты Списка. Вам необходимо к каждому из них добавить
        порядковый номер, относительно того, как они располагаются на странице.
        Вы можете использовать как <code>React.Children.map</code> так и{' '}
        <code>React.Children.toArray</code>
      </p>

    <WrapperComponent>
      <Component />
      <Component />
      <Component />
    </WrapperComponent>
    </CollapseWrapper>
  )
}

const Component = ({ num }) => {
  return <div>{num} <span>Компонент списка</span></div>
}

Component.propTypes = {
  num: PropTypes.number
}

export default ChildrenExercise
