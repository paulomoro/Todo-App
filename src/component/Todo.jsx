import { useState } from "react"



export default function Todo() {

    const [inputData, setInputData] = useState("")


    const [tasks, setTasks] = useState([])


    function handleChange(event){
        
        setInputData(event.target.value)
    } 

    function handleClick(){
        setTasks([...tasks,inputData])
        setInputData(inputData.value="")   
        
        }
    console.log(tasks)

    return(
            <div className="main">
            <h1 className="title">TODO LIST</h1>
            <p>welcome!!! input a list of all your TODO Task</p>


            <div className="form">
            <label htmlFor="todoText">
                <input 
                placeholder="enter task......."
                type="text" 
                id="todoText"
                onChange={handleChange}

                />
            </label>
            <button onClick={handleClick}>Add</button>
            </div>

            <ol>
                {tasks.map((task,index)=>(
                    <li key={index}>{task} </li>
                ))}
            </ol>
        </div>
    )
}