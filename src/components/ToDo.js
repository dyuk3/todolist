import React from 'react';

function ToDo(props) {
  const { todo, handleToggle } = props;

  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(e.currentTarget.id);
  };

  return (
    <div className='container'>
      <div
        style={{ cursor: 'pointer' }}
        id={todo.id}
        value={todo.id}
        name='todo'
        className={todo.complete ? 'strike' : ''}
        onClick={handleClick}
      >
        {todo.task}
      </div>
    </div>
  );
}

export default ToDo;
