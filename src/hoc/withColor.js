import React, { useContext } from 'react'
import ColorContext from '../ColorContext'

const withColor = (Component) => {
  return props => {
    const { color } = useContext(ColorContext)

    return (
      <Component {...props} color={color} />
     )
  }
}

export default withColor

