/* import logo from './logo.svg'; */
import React from 'react';
/* import { ReactDOM } from 'react'; */
import { AppUI } from './appUI';


/* import './App.css'; */


const defaultTodos = [
  { text: 'Conquistar el mundo', completed: false},
  { text: 'Ser millonaria', completed: false},
  { text: 'Llorar', completed: false},
  { text: 'Dormir', completed: false},
  { text: 'Morir', completed: true}
];

function App() {
  const  localStorageTodos = localStorage.getItem('TODOS_V1'); //API
  let parsedTodos;

  if (!localStorageTodos) { //! no existe
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState('');
  
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const pendingTodos = todos.filter(todo => todo.completed === false).length; //agregado recientemente
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
  
  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    setTodos(newTodos);
  };
  
  
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    
    const newTodos = [...todos]; //spread operator
    todos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    
    const newTodos = [...todos]; //spread operator
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    
    <AppUI 
    totalTodos={totalTodos}
    completedTodos={completedTodos}
    pendingTodos={pendingTodos} //agregado recientemente
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    />
  );
}

export default App;
