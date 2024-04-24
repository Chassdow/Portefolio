import React from "react";
import chat2 from '../img/Puissance4.png';
import '../../src/App.css'

function Projetdeux({ Projetdeux }) {
    return (
        <div className="containerL">
            <div>
                <img id="projet2" className="projectLimg" src={chat2} />
            </div>
            <h1 className="titre2">{Projetdeux.title}</h1>
            <div className="projetL">
            
            <p className="projettextL">{Projetdeux.p}</p>
            <p className="InfoPrems">
                {Projetdeux.première}
            </p>
            </div>
        </div>




    )
}
export default Projetdeux;