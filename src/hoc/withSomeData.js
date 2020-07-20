import React from 'react'

const withSomeData = (Component) => {
  return props => (
    <Component data="some data" {...props} />
  )
}

export default withSomeData
