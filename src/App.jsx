import TodoForm from './component/TodoForm'
import './App.css'
import Header from './component/Header'
import { useState } from 'react'
import Task from './component/Task'

function App() {

  const [inputData, setInputData] = useState("")

  const [tasks, setTasks] = useState([])

  const [darkMode, setDarkMode] = useState(false)


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
