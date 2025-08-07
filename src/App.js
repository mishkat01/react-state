import logo from './logo.svg';
import './App.css';
import BioData from './components/BioData';

function App() {
  let counter =0;
  
  const decrease= ()=>{
  
  }
  
  const increase= ()=>{
    
  }
  return (
    <div className="App">
          <p1>
            in crease counter by {counter}
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
