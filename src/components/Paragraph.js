import React from 'react';
import withColor from '../hoc/withColor'

function Paragraph({ color, text }) {
  return (
    <p style={{ color }}>
      {text}
    </p>
  )
}

export default withColor(Paragraph)
