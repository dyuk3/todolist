import React from 'react';

function ToDo(props) {
  const { todo, handleToggle } = props;

  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(e.currentTarget.id);
  };

  return (
    <div className='container row'>
      <div className='form-check col-sm align-self-center'></div>
      <div
        id={todo.id}
        key={todo.id + todo.task}
        value={todo.task}
        name='todo'
        className={`col-sm align-self-center  ${todo.complete ? 'strike' : ''}`}
      >
        <input
          className='form-check-input'
          type='checkbox'
          value=''
          id='flexCheckDefault'
          onClick={handleClick}
        />
        <label
          id={todo.id}
          key={todo.id + todo.task}
          value={todo.task}
          name='todo'
          className={`col-sm align-self-center form-check-label  ${
            todo.complete ? 'strike' : ''
          }`}
          htmlFor='flexCheckDefault'
        >
          {todo.task}
        </label>
      </div>
      <div className='col-sm align-self-center'>
        <i className='fa-solid fa-pen-to-square '></i>
      </div>
    </div>
  );
}

export default ToDo;
