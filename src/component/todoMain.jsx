import { useEffect, useState } from 'react'
import Task from './Task'
import TodoForm from './TodoForm'

import Header from './Header'
import {
    signOut,
    auth
  } from "../firebase";
  import { useNavigate } from 'react-router-dom';

export default  function TodoMain(prop) {

    const [inputData, setInputData] = useState("")

   
    const navigate =  useNavigate()

  const [tasks, setTasks] = useState(()=>{
    const savedTasks  = localStorage.getItem('tasks')
    return savedTasks ? JSON.parse(savedTasks) : []
  })


  useEffect(()=>{
     localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const  handleDelete = (taskId)=>{
    const filterTask = tasks.filter((item)=> item.id !== taskId)
    setTasks(filterTask)
    }

    const logOut = ()=>{
        signOut(auth)
        navigate("/login")
    }


        return (
            <div>
                <button className='logout' onClick={logOut}>Log Out</button>
                <div>
                     <Header 
                     darkMode={prop.darkMode}
                     handleMode={prop.handleMode}
                     />

                      <TodoForm 
                        inputData={inputData}
                        tasks = {tasks}
                        setTasks = {setTasks}
                        setInputData={setInputData}
                      />

                      <Task 
                        tasks  = {tasks}
                        handleDelete={handleDelete}
                      />
                </div>
            </div>
        );
    }
