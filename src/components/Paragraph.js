import React from 'react';
import ColorContext from '../ColorContext'

function Paragraph({ text }) {
  return (
    <ColorContext.Consumer>
    {
      value => (
        <p style={{ color: value.color }}>
          {text}
        </p>
      )
    }
    </ColorContext.Consumer>
  )
}

export default Paragraph
