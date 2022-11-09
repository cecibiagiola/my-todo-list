import React from "react";
import './TodoHeader.css';
import avatar from '../img/avatar.jpg';
import { TodoContext } from "../TodoContext";

function TodoHeader ( ) {
    const {pendingTodos} = React.useContext(TodoContext)
   let username = 'Cecilia';
    return(
        <div className="Header">
            <img
                src={avatar}
                className="Image"
             />
            <h2 className="TodoHeader">
                Hola {username} <br /> Tienes {pendingTodos} tareas pendientes
                </h2>
             
        </div>
        
    );
}

export {TodoHeader} ;