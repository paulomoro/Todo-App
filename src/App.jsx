import TodoForm from './component/TodoForm'
import './App.css'
import Header from './component/Header'
import { useEffect, useState } from 'react'
import Task from './component/Task'

function App() {

  const [inputData, setInputData] = useState("")


  const [tasks, setTasks] = useState(()=>{
    const savedTasks  = localStorage.getItem('tasks')
    return savedTasks ? JSON.parse(savedTasks) : []
  })

  const [darkMode, setDarkMode] = useState(false)

  useEffect(()=>{
     localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])


  function handleMode(){
    setDarkMode(prevMode => !prevMode)
  }
 



  return (
   <div className={darkMode ? "main dark" :  "main"}>
      <Header 
      darkMode={darkMode}
      handleMode={handleMode}
      />

      <TodoForm 
        inputData={inputData}
        tasks = {tasks}
        setTasks = {setTasks}
        setInputData={setInputData}
      />

      <Task 
        tasks  = {tasks}
      />
   </div>
  )
}

export default App
