import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import TaskDetails from './components/TaskDetails';

import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Tomar café",
      completed: true,
    },
    {
      id: "2",
      title: "Estudar",
      completed: false,
    },
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map( task => {
      if (task.id === taskId) return {...task, completed: !task.completed}

      return task;
    });
    setTasks(newTasks)
  };

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks, 
      {
          title: taskTitle,
          id: uuidv4(),
          completed: false,
      },
    ];

    setTasks(newTasks);
  }

  const handleTaskDelete = (taskId) => {
    const newTasks = tasks.filter( task => task.id !== taskId)

    setTasks(newTasks)
  }

  return (
    <Router>
     <div className="container">

       <header style={{color: '#eee'}}>
         <h1> Tarefas </h1>
       </header>
       <Route path="/" exact render={() => (

         <>
        <AddTask handleTaskAddition={handleTaskAddition} />
       <Tasks tasks={tasks} 
       handleTaskClick={handleTaskClick} 
       handleTaskDelete={handleTaskDelete} />
            </>
          )}
        />
     <Route path="/:taskTitle" exact component={TaskDetails}/>
     </div>
    </Router>
    );
};

export default App;