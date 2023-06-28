import { useEffect, useRef } from "react";
import React, { useState } from "react";

function TodoSearch({ todos, handleSearch }) {
  const [query, setQuery] = useState("");
  const searchBar = useRef(null);

  useEffect(()=>searchBar.current.focus());

  return (
    <>
      <input
        onChange={(e) => setQuery(e.target.value)}
        placeholder='search here for the tasks'
        name='text'
        className='todo-input-search'
        ref={searchBar}
      />
      <button 
      onClick={handleSearch}
      className='todo-button-clear'>
        clear
      </button>

      {todos
        .filter((item) => item.text.toLowerCase().includes(query.toLowerCase()))
        .map((todo) => (
          <div
            className={todo.isComplete ? "todo-row complete" : "todo-row"}
            key={todo.id}
          >
            {todo.text}
          </div>
        ))}
    </>
  );
}

export default TodoSearch;
