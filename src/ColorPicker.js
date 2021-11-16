import React, { useState } from "react";
import "./App"
import "./ColorPicker.css"
import axios from "axios";
import {
        IDLE_STATUS,
        LOADING_STATUS,
        COMPLETE_STATUS,
        ERROR_STATUS,
} from './Status/Const'

/* Arreglo de colores, se agregan los necesarios */
const colors = ['#000000', '#FFFFFF', '#607D8B', '#ABB8C3', '#D0021B', '#F44336','#FF9800', '#009688', '#4CAF50', '#7ED321', '#4A90E2', '#8ED1FC', '#50E3C2', '#BD10E0', '#FA28FF', '#F78DA7', '#E91E63', '#C45100', '#795548','#FFC107', '#FFE0B2', ];

function ColorPicker(props) {

    const handleClick = (event) => {
        props.setSelectedColor(event.target.name);
    }

    return (
        <ul style={{display: 'flex', listStyle: 'none' }}>
            {colors.map((color) => { 
                const isSelected = color === props.selectedColor;
                {/* Estilo del color seleccionado*/}
                {/* Pone un borde más ancho al color seleccionado */}
                const borderStyle = isSelected ? '10px solid whitesmoke' : '5px solid whitesmoke';
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