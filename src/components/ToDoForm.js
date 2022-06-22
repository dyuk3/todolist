import React, { useState } from 'react';

const ToDoForm = (props) => {
  const [userInput, setUserInput] = useState('');

  const { addTask } = props;

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput('');
  };

  return (
    <div className='container text-center'>
      <form action='' onSubmit={handleSubmit}>
        <input
          value={userInput}
          type='text'
          placeholder='Enter a task'
          onChange={handleChange}
          required
        />
        <button type='submit'>Add Task</button>
      </form>
    </div>
  );
};

export default ToDoForm;
