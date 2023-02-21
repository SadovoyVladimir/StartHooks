import React from 'react'
import CardWrapper from '../../common/Card'

export default function withPropsStyles(Component) {
  return (props) => {
    return (
      <CardWrapper>
        <Component {...props} name='new Name' />
      </CardWrapper>
    )
  }
}
