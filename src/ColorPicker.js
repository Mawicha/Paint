import { useState } from "react";
import react from "react";
import './App.css';

const colors = ['#000000', '#FFFFFF', '#ABB8C3', '#D0021B', '#FF9800', '#F8E71C', '#7ED321', '#4A90E2', '#8ED1FC','#BD10E0', '#F78DA7', '#E91E63']
 
function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState();
 
  const handleClick = (event) => {
    setSelectedColor(event.target.name);
  }
 
  return (
      <ul className="ColorPicker" style={{display: 'flex', listStyle: 'none'}}>
        {colors.map((color) => {
        const isSelected = color ===selectedColor;
        const borderStyle = isSelected ? '10px solid #D9E3F0' : '3px solid #D9E3F0';
        return (
            <div key={color}>

            <div id="pallete" key={color}>
                <button
                    className="btn"
                    type="button"
                    key={color}
                    name={color}
                    onClick={handleClick}
                    style={{
                        width: '50px',
                        height: '50px',
                        border: borderStyle,   
                        background: color,
                    }}>
                </button>

            </div>
        </div>
        )
        })}
      </ul>
    );
}
 
export default ColorPicker;