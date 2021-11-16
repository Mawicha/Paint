import { useState } from 'react'
import './App.css';
import ColorPicker from './ColorPicker';
import Panel from './Panel';

function App() {
  {/* arreglo para generar la cuadricula */}
  let grid = []; 

  {/* estado de la cuadricula */}
  const [stateGrid, setStateGrid] = useState(grid); 
  const [selectedColor, setSelectedColor] = useState('whitesmoke')
  const [mark, setMark] = useState('empty');

  {/* cuadricula de 10x10 generada por ciclo for */}
  for (let i = 1 ; i <= 100 ; i++) {
    grid.push({ id: i, pixcolor: 'whitesmoke', height: '38px', width: '38px' });
  }

  {/* función para volver los pixeles al estado inicial */}
  function resetting() {
    setStateGrid(grid);
    setMark('empty');
  }

  return (
    <div className="App">
      <div>
        <h1>Paint App</h1>
        <h3>Choose a color to start your masterpiece</h3>
        
        {/* Componente selector de color */}
        <ColorPicker
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        /> 

        {/* Componente para editar la cuadricula */}
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
