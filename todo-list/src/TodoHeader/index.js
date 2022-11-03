import React from "react";
import './TodoHeader.css';
import avatar from '../img/avatar.jpg';

function TodoHeader () {
    return(
        <div className="Header">
            <img
                src={avatar}
                className="Image"
             />
            <h2 className="TodoHeader">Hola Marta! <br /> Tienes 3 tareas pendientes</h2>
             
        </div>
        
    );
}

export {TodoHeader} ;