import './App.css';
// import Home from './components/Home';
// import Lists from './components/Lists';
import { useState } from 'react';
import data from '../src/data.json';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import { useEffect } from 'react';

function App() {
  // state of lists
  const [toDoList, setToDoList] = useState(data);
  const [idCount, setIdCount] = useState(toDoList.length);

  // change the complete status of task
  const handleToggle = (id) => {
    let changed = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    // update the state of list
    setToDoList(changed);
  };

  // filter the completed tasks
  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
  };

  // add new task to the list
  const addTask = (userInput) => {
    setIdCount((idCount) => idCount + 1);
    let copy = [...toDoList];
    copy = [...copy, { id: idCount, task: userInput, complete: false }];
    setToDoList(copy);
  };

  useEffect(() => {
    setIdCount((idCount) => idCount + 1);
  }, []);

  return (
    <div className='container text-center'>
      <Header />
      <ToDoList
        toDoList={toDoList}
        handleToggle={handleToggle}
        handleFilter={handleFilter}
      />

      <ToDoForm addTask={addTask} />

      <div></div>
    </div>
  );
}

export default App;
