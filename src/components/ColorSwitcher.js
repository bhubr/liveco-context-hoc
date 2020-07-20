import React, { useContext } from 'react'
import ColorContext from '../ColorContext'

function ColorSwitcher() {
  const { color, setColor } = useContext(ColorContext)
  return (
    <select value={color} onChange={e => setColor(e.target.value)}>
      <option value="yellow">Yellow</option>
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
      <option value="pink">Pink</option>
    </select>
  )
}

export default ColorSwitcher;

