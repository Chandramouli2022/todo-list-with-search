import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import TodoSearch from "./TodoSearch";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const [toggle, setToggle] = useState(true);
  const handleSearch = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };

  return (
    <>
      {toggle ? (
        <>
          <h1>What's the Plan for Today?</h1>
          <TodoForm onSubmit={addTodo} />
          <button onClick={handleSearch} className='todo-button-toggle'>
            Search
          </button>
          <Todo
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
        </>
      ) : (
        <TodoSearch todos={todos} handleSearch={handleSearch}/>
      )}
    </>
  );
}

export default TodoList;
