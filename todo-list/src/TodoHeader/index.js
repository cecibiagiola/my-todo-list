import React from "react";
import './TodoHeader.css';
import avatar from '../img/avatar.jpg';

function TodoHeader ( {pending} ) {
    
   let username = 'Cecilia';
    return(
        <div className="Header">
            <img
                src={avatar}
                className="Image"
             />
            <h2 className="TodoHeader">
                Hola {username} <br /> Tienes {pending} tareas pendientes
                </h2>
             
        </div>
        
    );
}

export {TodoHeader} ;