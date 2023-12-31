import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      <input
        placeholder='Add your item'
        value={input}
        onChange={handleChange}
        name='text'
        ref={inputRef}
        className='todo-input edit'
      />
      {props.edit ? (
        <button onClick={handleSubmit} className='todo-button edit'>
          Update
        </button>
      ) : (
        <>
          {" "}
          <button onClick={handleSubmit} className='todo-button-add'>
            Add 
          </button>

        </>
      )}
    </form>
  );
}

export default TodoForm;
