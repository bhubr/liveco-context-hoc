import React from 'react'
import withColor from '../hoc/withColor'

const Button = ({ color, label }) => (
  <button style={{ color }}>{label}</button>
)

export default withColor(Button)

