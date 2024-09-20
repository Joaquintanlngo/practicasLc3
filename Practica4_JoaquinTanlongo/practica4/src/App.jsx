import { useState } from 'react'
import './App.css'
import TaskList from './components/taskList/TaskList'
import NewTask from './components/newTask/NewTask'


function App() {
  const [listTask, setlistTask] = useState([
    {
      title: "Limpiar el baño"
    },
    {
      title: "hacer tarea"
    }
  ])

  const addTask = (newTaskTransformed) => {
    setlistTask([...listTask, newTaskTransformed])
  }

  const Delete = (title) => {
    setlistTask(listTask.filter(task => task.title !== title))
  } 

  return (
    
    <>
      <TaskList 
      list={listTask}
      onDelete={Delete}
      />

      <NewTask
      addTask={addTask}
      />
    </>
    
  )
}

export default App
