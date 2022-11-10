import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm(){
   const [newTodoValue, setNewTodoValue] = React.useState('');
   
    const  {
    AddTodo,
    setOpenModal,    
   } = React.useContext(TodoContext);
   
   const onChange = (event) => {
     setNewTodoValue(event.target.value);
   };

    const onCancel = () => {
     setOpenModal(false);
   };

   const onSubmit = (event) => {
        event.preventDefault();
        AddTodo(newTodoValue);
        setOpenModal(false);
   };
   
    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nueva tarea</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder="Escriba aqui su tarea"
            />
            <div className="TodoForm-ButtonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                   /*  onClick={onSubmit} */
                >
                    Anadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm }