import React from "react";
import chat1 from '../img/battleshipimage.png';
import '../../src/App.css'

function Projetun({ Projetun }) {
    return (
        
            <div className="containerR">
                <img id="projet1" className="projetRimg"
                    src={chat1}
                />
                <div>
                    <div className="titreR"><h1>{Projetun.title}</h1></div>
                    <p className="projettextR">{Projetun.p}</p>
                </div>
            </div>

        
    )
}
export default Projetun;