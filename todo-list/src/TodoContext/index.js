import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext(); 

function TodoProvider (props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);
        
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);
      
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const pendingTodos = todos.filter(todo => todo.completed === false).length; 
      const totalTodos = todos.length;
    
      let searchedTodos = [];
    
      if(!searchValue.length >= 1) {
        searchedTodos = todos;
      } else {
    
        searchedTodos = todos.filter(todo =>{
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
           return todoText.includes(searchText);
        });
      }
      
      const AddTodo = (text) => {
        const newTodos = [...todos]; //spread operator
        newTodos.push({
          completed: false,
          text,
        });
        saveTodos(newTodos);
      };

      const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        if (!newTodos[todoIndex].completed) {
          newTodos[todoIndex].completed = true
        } else {
          newTodos[todoIndex].completed = false
        };
        saveTodos(newTodos);
      };
    
      const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        
        const newTodos = [...todos]; //spread operator
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      };

    
    return ( 
        <TodoContext.Provider value={{
            error,
            loading,
            totalTodos,
            completedTodos,
            pendingTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            AddTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            
          
        }}>
            {props.children}
        </TodoContext.Provider>
    )  ;
}

export { TodoContext, TodoProvider};

