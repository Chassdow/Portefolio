import React from "react";
import '../../src/App.css'

function navbar({}) {
    return (  
            <div className="NavbarContainer">
                
                <ul className="Navbar">
                <li>
                    <a href="moi">Mes info</a>
                </li>
                <li>
                    <a href="#projet1">premier projet</a>
                </li>
                <li>
                    <a href="#projet2">deuxième projet</a>
                </li>
                <li>
                    <a href="#projet3"> troisième projet</a>
                </li>
                </ul>
            </div>
    )
}
export default navbar