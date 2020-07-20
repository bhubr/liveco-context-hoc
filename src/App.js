import React, { useState } from 'react';
import Paragraph from './components/Paragraph'
import ColorSwitcher from './components/ColorSwitcher'
import Button from './components/Button'
import ColorContext from './ColorContext'
import withSomeData from './hoc/withSomeData'
import withLayout from './hoc/withLayout'
import './App.css';

// Deux composants
// * ColorSwitcher
// * Paragraph

const ParagraphWithData = withSomeData(Paragraph)

function App() {
  const [color, setColor] = useState('red')
  return (
    <ColorContext.Provider value={{ color, setColor }}>
    <div className="App">
      <ColorSwitcher />
      <Paragraph text="This is some text" />

      <ParagraphWithData text="This is another paragraph" />

      <Button label="Look, a colored button!" />
    </div>
    </ColorContext.Provider>
  );
}

export default withLayout(App);
