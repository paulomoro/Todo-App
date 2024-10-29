import './App.css'
import { useState } from 'react'
import Login from './component/Login'
import SignUp from './component/SignUp'
import TodoMain from './component/todoMain'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  const [darkMode, setDarkMode] = useState(false)

  function handleMode(){
    setDarkMode(prevMode => !prevMode)
  }


  return (

   <div className={darkMode ? "main dark" :  "main"}>
     <div className="toggleMode" onClick={handleMode}>
                <div className="toggleButton"></div>
            </div>

      <BrowserRouter>
      <Routes>
         <Route path="/todoMain" element={<TodoMain 
         darkMode={darkMode}
         handleMode={handleMode} 
        />} />
          
        <Route path="/" element={<SignUp />} />

        <Route path="/login" element={<Login/>} />

      </Routes>
    </BrowserRouter>
    
   </div>
  )
}

export default App
