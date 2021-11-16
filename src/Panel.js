import React from "react";
import { useState } from "react";
import "./App";
import "./Panel.css"
 
function Panel(props) {
   const [press, setPress] = useState(false);

   {/* función para pintar los pixeles de uno en uno */}
   function paintOne(event) {
       props.setMark('filled');
       props.setStateGrid(
           props.stateGrid.map(
               (pixel) => {
                if (pixel.id === Number(event.target.name))
                pixel.pixcolor = props.selectedColor;
                return pixel;
               }
           )
       );
   }

   {/* función para iniciar el pintado continuo */}
   function start(event) {
       setPress(true);
       paintOne(event);
   }

   {/* función para detener el pintado continuo */}
   function stop() {
       setPress(false);
   }
   
   {/* función para el pintado continuo */}
   function continued(event) {
    if(!press) return
    paintOne(event);
    }

    return (
        <div id="section">
            <div id="piece" ref={props.ss}>
                <div id="pixel"
                onClick={paintOne}
                onMouseDown={start}
                onMouseUp={stop}
                >
                    {props.stateGrid.map(
                        (pixel) => {
                            return (
                                <button
                                    /* estilo del pixel */
                                    name={pixel.id}
                                    key={pixel.id}
                                    onMouseOver={continued}                                    style={{
                                        width: pixel.width,
                                        height: pixel.height,
                                        backgroundColor: pixel.pixcolor,
                                        borderRadius: '3px',
                                        margin: '1px'
                                    }}
                                >
                                </button>
                            )
                        }
                    )}
                </div>
            </div>
        </div>
    );
}
 
export default Panel;
