// // src/App.js
// import React, { useState } from 'react';
// import TodoList from './TodoList';
// import './App.css';
// import TodoForm from './TodoForm';

// const App = () => {
//   const [todos, setTodos] = useState([]);

//   const handleAdd = (text) => {
//     const newTodo = {
//       id: Date.now(),
//       text
//     };
//     setTodos([...todos, newTodo]);
//   };

//   const handleDelete = (id) => {
//     setTodos(todos.filter(todo => todo.id !== id));
//   };

//   const handleEdit = (id, newText) => {
//     setTodos(todos.map(todo => (todo.id === id ? { ...todo, text: newText } : todo)));
//   };

//   return (
//     <div className="App">
//       <h1>Todo App</h1>
//       <TodoForm onAdd={handleAdd} />
//       <TodoList todos={todos} onDelete={handleDelete} onEdit={handleEdit} />
//     </div>
//   );
// };

// export default App;
// src/App.js
import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAdd = (text) => {
    const newTodo = {
      id: Date.now(),
      text
    };
    setTodos([...todos, newTodo]);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEdit = (id, newText) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, text: newText } : todo)));
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm onAdd={handleAdd} />
      <TodoList todos={todos} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default App;
