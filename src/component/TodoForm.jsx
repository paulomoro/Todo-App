
export default function Todo(prop) {


    function handleChange(event){
        prop.setInputData(event.target.value)
    } 

    function handleKeyPressed(event){
        if(event.key==='Enter'){
            if(prop.inputData === ""){
                event.preventDefault()
            }
            else{
            prop.setTasks([...prop.tasks,prop.inputData])
            prop.setInputData("")  
            }
        }
    }

    function handleClick(event){
        if(prop.inputData === ""){
            event.preventDefault()
        } else{
            prop.setTasks([...prop.tasks,prop.inputData])
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