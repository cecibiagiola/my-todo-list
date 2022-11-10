import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm} from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoHeader } from '../TodoHeader';
import { Modal} from '../Modal';



function AppUI() {
   const {
     error, 
      loading, 
      searchedTodos, 
      completeTodo, 
      deleteTodo,
      openModal,
      setOpenModal,
   } = React.useContext(TodoContext)

    return(
        <React.Fragment>
      <TodoHeader />
      <TodoCounter /> 
      <TodoSearch />
    
          <TodoList>
          { error  && <p>Se ha producido un error</p>}
          { loading  && <p>Cargando...</p>}
          { (!loading && !searchedTodos.length) && <p>Crea tu primer tarea!</p>}

        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete ={() => completeTodo(todo.text)}
            onDelete= {() => deleteTodo(todo.text)}
            
            />
          ))}
      </TodoList>
      
      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton 
        setOpenModal={setOpenModal}
      /> 
      
    </React.Fragment>
    );
}

export { AppUI };