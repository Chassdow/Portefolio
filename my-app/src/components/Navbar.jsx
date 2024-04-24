import React from "react";
import '../../src/App.css'

function navbar({ }) {
    return (
        <div className="NavbarContainer">

            <ul className="Navbar">
                <li>
                    <a href="moi">Mes info, ㅤㅤ</a>
                </li>
                <li>
                    <a href="#projet1"> Mes Projet, ㅤㅤ</a>
                </li>
                <li>
                    <a href="#contact">Me Contacter. ㅤㅤ</a>
                </li>
            </ul>
        </div>
    )
}
export default navbar