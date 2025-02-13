import React, { useState } from 'react';
import './index.css';
import { Todo } from './types/todo';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Learn TypeScript', completed: false},
    { id: 2, text: 'Build a Todo App', completed: false},
  ]);

  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed} : todo
      )
    );
  };

  return (
    <div className='container'>
      <h1>Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
    </div>
  );
};

export default App;