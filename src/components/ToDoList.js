import React from 'react';
import ToDo from './ToDo';

function ToDoList(props) {
  const { toDoList, handleToggle, handleFilter } = props;

  return (
    <div className='container text-center'>
      {toDoList.map((todo) => {
        return (
          <ToDo
            todo={todo}
            handleToggle={handleToggle}
            handleFilter={handleFilter}
            key={todo.id + todo.task}
          />
        );
      })}
      <button className='btn btn-danger' onClick={handleFilter}>
        Clear
      </button>
    </div>
  );
}

export default ToDoList;
