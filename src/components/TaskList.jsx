import React, { useState, useEffect } from "react";
import '../stylesheets/TaskList.css'
import Form from '../components/Form.jsx'
import Task from '../components/Task.jsx'

function TaskList() {

  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks){
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const addTask = task => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      const actualTasks = [task, ...tasks];
      setTasks(actualTasks);

      localStorage.setItem('tasks', JSON.stringify(actualTasks))

    }
    else(alert('Ingresa una tarea'))
  }

  const deleteTask = id => {
    const actualTasks = tasks.filter(task => task.id !== id);
    setTasks(actualTasks);
    localStorage.setItem('tasks', JSON.stringify(actualTasks));
  };

  const completeTask = id => {
    const actualTasks = tasks.map(task => {
      if(task.id === id){
        task.complete = !task.complete;
      }
      return task
  });
    setTasks(actualTasks);
  };

  return (
    <>
      <Form onSubmit={addTask}/>
      <div className="task-list-container">
        {
          tasks.map((task) =>
            <Task 
              key={task.id}
              id={task.id}
              text={task.text}
              complete={task.complete}
              completeTask={completeTask}
              deleteTask={deleteTask}
            />
          )
        }
      </div>
    </>
  )
};

export default TaskList