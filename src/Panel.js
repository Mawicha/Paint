import React from "react";
import { useState } from "react";
import "./App";
import "./Panel.css"
 
function Panel(props) {
   const [pressed, setPressed] =useState(false);

   function paintClick(event) {
       props.setMark('filled');
       props.setStateGrid(
           props.stateGrid.map(
               (pixel) => {
                if (pixel.id === Number(event.target.name))
                pixel.pxcolor = props.selectedColor;
            return pixel;
               }
           )
       );
   }

   function startPainting(event) {
       setPressed(true);
       paintClick(event);
   }

   function paintPressed(event) {
       if(!pressed) return
       paintClick(event);
   }

   function stopPaint() {
       setPressed(false);
   }
   
    return (
        <div id="section">
            <div id="piece" ref={props.ss}>
                <div id="pixel"
                onClick={paintClick}
                onMouseDown={startPainting}
                onMouseUp={stopPaint}
                >
                    {props.stateGrid.map(
                        (pixel) => {
                            return (
                                <button
                                    name={pixel.id}
                                    key={pixel.id}
                                    onMouseOver={paintPressed}
                                    disabled={props.unclick}
                                    style={{
                                        width: pixel.width,
                                        height: pixel.height,
                                        border: props.borders === true ? '1px groove #BD10E0' : '0',
                                        backgroundColor: pixel.pxcolor,
                                        margin: '1px',
                                        padding: '1px',
                                        borderRadius: '0px'
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
