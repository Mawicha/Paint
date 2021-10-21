import react, { useState } from "react";

function Grid () {
    panelWidth = 16,
    height = 16

    const [selectedColor, setSelectedColor] = useState("");
    
    function changeColor(color) {
        setSelectedColor(color);
    }
    return (
        <div id="grid">
            <div id="options">
                <div className="option"
                    onChange={(e) => {
                        {width}
                    }}
                >
                </div>
            </div>
        </div>
    )
}
export default Grid;
