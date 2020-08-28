import React from 'react';
import { HexContent } from './components/HexContent';
import { HexForm } from './components/HexForm';

function App() {
  return (
    <div style={{width: '282px', height: '264px', position: 'relative'}}>
      <HexForm />
      <HexContent />
    </div>
  )
}

export default App;
