import logo from './logo.svg';
import './App.css';
import BioData from './components/BioData';

import { useState } from 'react';

function App() {

  
  const [dynamicValue, setDynamicvalue]= useState(0);
  const decrease= ()=>{
             setDynamicvalue(dynamicValue - 1);
  }
  
  const increase= ()=>{

    setDynamicvalue(dynamicValue +1);

  }
  return (
    <div className="App">
          <p1>
            in crease counter by {dynamicValue}
          </p1>
          <button onClick={increase}>
            click to increase +1
          </button>
          <button onClick={decrease}>
            click to decrease -1
          </button>
    </div>
  );
}

export default App;
