import React from 'react';
import ToDo from './ToDo';

function ToDoList(props) {
  const { toDoList, handleToggle, handleFilter } = props;

  return (
    <div className='container '>
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
      <button className='btn btn-danger my-4' onClick={handleFilter}>
        Clear Completed task
      </button>
    </div>
  );
}

export default ToDoList;
