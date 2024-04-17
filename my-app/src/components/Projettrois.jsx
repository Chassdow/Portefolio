import React from "react";
import chat1 from '../img/spotify3.png';
import '../../src/App.css'

function Projettrois({ Projettrois }) {
    return (
        <>
            <div className="containerR">
                <img id="projet3" className="projetRimg"
                    src={chat1}
                />
                <div>
                    <h1 className="titreR">{Projettrois.title}</h1>
                    <p className="projettextR">{Projettrois.p}</p>
                </div>
            </div>

        </>
    )
}
export default Projettrois;