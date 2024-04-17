import React from "react";
import Html from '../img/html-5.png';
import Css from '../img/css-3.png';
import Js from '../img/js.png';
import Php from '../img/php.png';
import Reaact from '../img/React-icon.svg.png';
import Mysql from '../img/mysql.png';
import '../../src/App.css'

// function Information ({Information}){
//     return (
//         <>
//         <div className="containerinfo">
//             <p>{Information.p}</p>
//         </div>
//         </>
//     )
// }  
// export default Information; 

function Information({ Information }) {
    return (

        <div className="containerinfo">
            <h1 className="titre">{Information.title}</h1>
            <div className="Logo">
                <img id="Html" className="logoO"
                    src={Html}
                />
                <img id="Css" className="logoO"
                    src={Css}
                />
                <img id="Js" className="logoO"
                    src={Js}
                />
                <img id="Php" className="logoO"
                    src={Php}
                />
                <img id="Reaact" className="logoO"
                    src={Reaact}
                />
                <img id="MySql" className="logoO"
                    src={Mysql}
                />
            </div>
        </div>


    )
}
export default Information;