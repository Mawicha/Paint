import { useState } from 'react'
import './App.css';
import ColorPicker from './ColorPicker';
import Panel from './Panel';

function App() {
  let grid = [];
  const [stateGrid, setStateGrid] = useState(grid);
  const [selectedColor, setSelectedColor] = useState('#FFF')
  const [mark, setMark] = useState('empty');

  for (let i=1; i<=100; i++) {
    grid.push({ id: i, pxcolor: 'whitesmoke', height: '38px', width: '38px' });
  }

  function resetting() {
    setMark('empty');
    setStateGrid(grid);
  }

  return (
    <div className="App">
      <div>
        <h1>Paint App</h1>
        <h3>Choose a color to start your masterpiece</h3>
        
        <ColorPicker
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        /> 

        <Panel
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          mark={mark}
          setMark={setMark}
          stateGrid={stateGrid}
          setStateGrid={setStateGrid}
        />
   
        <button className="btn" id="reset" type="reset" onClick={resetting} >Reset</button> <span></span> 
        <button className="btn" id="print" type="button" >Screenshot</button>
      </div>
    </div>
  );
}
 
export default App;
