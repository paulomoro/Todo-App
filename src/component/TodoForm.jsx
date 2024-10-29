import { v4 as uuidv4 } from 'uuid'
export default function Todo(prop) {


    function handleChange(event){
        prop.setInputData(event.target.value)
    } 
    const taskId = uuidv4()


    function handleKeyPressed(event){


        if(event.key==='Enter'){
            if(prop.inputData === ""){
                event.preventDefault()
            }
            else{
            prop.setTasks([...prop.tasks,{name: prop.inputData, id: taskId}])
            prop.setInputData("")  
            }
        }
    }

    function handleClick(event){
        if(prop.inputData === ""){
            event.preventDefault()
        } else{
           prop.setTasks([...prop.tasks, {name: prop.inputData, id: taskId}])
            prop.setInputData("") 
        }
       
        }

    return(
            <div className="form">
            <label htmlFor="todoText" >
                <input 
                placeholder="enter task......."
                type="text" 
                id="todoText"
                value={prop.inputData}
                onChange={handleChange}
                onKeyDown={handleKeyPressed}
                 />
            </label>
            <button onClick={handleClick}>Add</button>
            </div>
    )
}