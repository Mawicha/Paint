import React, { useState, useEffect } from "react";
import "./App"
import "./ColorPicker.css"
import axios from "axios";
import {
        IDLE_STATUS,
        LOADING_STATUS,
        ERROR_STATUS,
        COMPLETE_STATUS,
} from './Utils/constants'


/* Arreglo de colores, se agregan los necesarios */
/* const colors = ['#000000', '#FFFFFF', '#607D8B', '#ABB8C3', '#D0021B', '#F44336','#FF9800', '#009688', '#4CAF50', '#7ED321', '#4A90E2', '#8ED1FC', '#50E3C2', '#BD10E0', '#FA28FF', '#F78DA7', '#E91E63', '#C45100', '#795548','#FFC107', '#FFE0B2', ]; */

/* Arreglo de colores cambiante */
let colors = [];

function ColorPicker(props) {
    {/* Cambio de estado en Status */}
    const [status, setStatus] = useState(IDLE_STATUS);

    {/* Función asíncrona para llamar a la API */}
    const changeColor = async () => {
        {/* Llamada a la API con el url, s en https -> llamada segura */}
        axios.get('https://www.colr.org/json/colors/random/7').then(response => {
            setStatus(LOADING_STATUS);
            colors = [];
            {/* Llenar arreglo colors con los datos de la API */}
            for(let i = 0; i < 7 ; i++) {
                {/* Se agrega # para que se pueda leer el color en hexa */}
                colors.push('#' + response.data.colors[i].hex);
            }
            setStatus(COMPLETE_STATUS);
        })
        .catch(() => {
            console.log('Error al importar la API');
            setStatus(ERROR_STATUS);
        })
    }

    useEffect(() => {
        changeColor();
    }, 
    [] /* Evita ciclo infinito */
    ); 

    {/* Reconoce el color que se escoja al dar click en el Color Picker */}
    const handleClick = (event) => {
        props.setSelectedColor(event.target.name);
    }

    {/* Cuando el status = loading -> se esta cargando la API */}
    if(status === LOADING_STATUS || status === IDLE_STATUS) {
        return <p>LOADING . . .</p>
    }

    { /* Cuando hay error al cargar la API o la pagina */}
    if(status === ERROR_STATUS) {
        return <p>ERROR!!! Reload the page</p>
    }

    {/* Si no hay errores, y el status está completo */}
    if(status === COMPLETE_STATUS) {
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
}

export default ColorPicker;