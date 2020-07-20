import React, { useState } from 'react';
import Paragraph from './components/Paragraph'
import ColorSwitcher from './components/ColorSwitcher'
import ColorContext from './ColorContext'
import './App.css';

// Deux composants
// * ColorSwitcher
// * Paragraph

function App() {
  const [color, setColor] = useState('red')
  return (
    <ColorContext.Provider value={{ color, setColor }}>
    <div className="App">
      <ColorSwitcher />
      <Paragraph text="This is some text" />
    </div>
    </ColorContext.Provider>
  );
}

export default App;
