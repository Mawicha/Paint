import react from 'react'
import './App.css';
import ColorPicker from './ColorPicker';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Paint App</h1>
        <h2>Choose a color to start painting: </h2> 
        <ColorPicker/>
        <button>Reset</button>
        <button>Print</button>
      </div>
    </div>
  );
}

export default App;
