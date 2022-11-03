/* import logo from './logo.svg'; */
import React from 'react';
/* import { ReactDOM } from 'react'; */
import { AppUI } from './appUI';


/* import './App.css'; */


const defaultTodos = [
  { text: 'cortar cebolla', completed: false},
  { text: 'tomar el curso de intro a React', completed: false},
  { text: 'Llorar', completed: false},
  { text: 'Gritar', completed: false},
  { text: 'Morir', completed: true}
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  
  const completedTodos = todos.filter(todo => !!todo.completed).length;
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
  
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    
    const newTodos = [...todos]; //spread operator
    todos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    
    const newTodos = [...todos]; //spread operator
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    
    <AppUI 
    totalTodos={totalTodos}
    completedTodos={completedTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    />
  );
}

export default App;
