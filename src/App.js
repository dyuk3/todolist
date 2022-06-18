import './App.css';
// import Home from './components/Home';
// import Lists from './components/Lists';
import { useState } from 'react';
import data from '../src/data.json';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

function App() {
  // state of lists
  const [toDoList, setToDoList] = useState(data);

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

  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
  };

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [
      ...copy,
      { id: toDoList.length + 1, task: userInput, complete: false },
    ];
    setToDoList(copy);
  };

  return (
    <div className='container'>
      <Header />
      <ToDoList
        toDoList={toDoList}
        handleToggle={handleToggle}
        handleFilter={handleFilter}
      />
      {/* <Home lists={lists} setLists={setLists} /> */}
      {/* <Lists /> */}

      <ToDoForm addTask={addTask} />
    </div>
  );
}

export default App;
