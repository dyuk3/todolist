import React, { useState } from 'react';

function ToDo(props) {
  const { todo, handleToggle, updateTask, deleteTask } = props;

  const [isChecked, setIsChecked] = useState(false);

  const handleClick = (e) => {
    // e.preventDefault();
    handleToggle(e.currentTarget.id);
    setIsChecked(!isChecked);
  };

  return (
    <div className='container row'>
      <div
        // id={todo.id}
        // key={todo.id + todo.task}
        // value={todo.task}
        // name='todo'
        // className={`col-sm align-self-center form-check  ${
        //   todo.complete ? 'strike' : ''
        // }`}
        className=' container col-sm align-self-center'
      >
        <input
          className={`col-sm align-self-center  form-check-input  ${
            todo.complete ? 'strike' : ''
          }`}
          type='checkbox'
          value={todo.task}
          id={todo.id}
          name='todo'
          // defaultChecked={todo.complete ? true : false}
          onClick={handleClick}
          defaultChecked={todo.complete ? true : false && { isChecked }}
        />
        <label
          id={todo.id}
          key={todo.id + todo.task}
          value={todo.task}
          name='todo'
          className={`col-sm align-self-center form-check-label  ${
            todo.complete ? 'strike' : ''
          }`}
          htmlFor={todo.id}
          // onClick={handleClick}
        >
          {todo.task}
        </label>
      </div>
      <div className='col-sm align-self-center'>
        <i
          className='fa-solid fa-trash-can mx-2'
          onClick={() => {
            deleteTask(todo.id);
          }}
        ></i>
        <i
          className='fa-solid fa-pen-to-square'
          onClick={() => updateTask(todo)}
        ></i>
      </div>
    </div>
  );
}

export default ToDo;
