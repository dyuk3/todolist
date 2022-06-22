import React, { useRef, useState } from 'react';
import ToDo from './ToDo';

function ToDoList(props) {
  const { toDoList, handleToggle, handleFilter, setToDoList } = props;

  const ref = useRef(null);
  const refClose = useRef(null);

  const [newTask, setNewTask] = useState({
    id: '',
    etask: '',
  });

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    refClose.current.click();
    editTask(newTask.id, newTask.etask);
  };

  const updateTask = (currentTask) => {
    ref.current.click();
    setNewTask({
      id: currentTask.id,
      etask: currentTask.task,
    });
    console.log(newTask);
  };

  const deleteTask = (id) => {
    const updatedNotes = toDoList.filter((toDo) => {
      return toDo.id !== id;
    });
    setToDoList(updatedNotes);
  };

  const editTask = (id, task) => {
    // Logic to edit in client
    const updatedTask = JSON.parse(JSON.stringify(toDoList));
    for (let index = 0; index < updatedTask.length; index++) {
      const element = updatedTask[index];
      if (element.id === id) {
        updatedTask[index].task = task;
        break;
      }
    }
    setToDoList(updatedTask);
  };

  return (
    <div className='container '>
      {/* <!-- Button trigger modal --> */}
      <button
        type='button'
        className='btn btn-primary d-none'
        data-bs-toggle='modal'
        data-bs-target='#exampleModal'
        ref={ref}
      >
        Launch demo modal
      </button>

      {/* <!-- Modal --> */}
      <div
        className='modal fade'
        id='exampleModal'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Modal title
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <form>
                <div className='mb-3'>
                  <label htmlFor='etask' className='form-label'>
                    Task
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='etask'
                    name='etask'
                    value={newTask.etask}
                    onChange={handleChange}
                    aria-describedby='emailHelp'
                  />
                </div>
              </form>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
                ref={refClose}
              >
                Close
              </button>
              <button
                type='button'
                className='btn btn-primary'
                onClick={handleUpdate}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='container mx-2'>
        {toDoList.length === 0 && 'No tasks to be displayed'}
      </div>
      {toDoList.map((todo) => {
        return (
          <ToDo
            todo={todo}
            handleToggle={handleToggle}
            updateTask={updateTask}
            deleteTask={deleteTask}
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
