import React from "react";
import "./style.css"

function Chip() {
    return <div className="chip flex-box">
        <div className="first-box flex-box flex-item-center">
            <div className="chip-middle">
                <div></div>
            </div>
        </div>
        <div className="mid-box flex-box flex-item-column">
            <div className="m-d m-t-div"></div>
            <div className="m-d m-b-div"></div>
        </div>
        <div className="last-box flex-box flex-item-center">
            <div className="chip-middle right-middle-chip">
                <div></div>
            </div>
        </div>
    </div>
}
export default Chip