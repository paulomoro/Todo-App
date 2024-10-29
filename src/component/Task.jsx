
export default function Task(prop){


    


    return(
        <div className="task">
            <ul>
                {prop.tasks.map((task)=>(
                    <li key={task.id} > 
                    <p>{task.name}</p> 
                    <button onClick={()=> prop.handleDelete(task.id)}> Delete</button>  
                    </li>
                     
                ))}
            </ul>

            {/* <ul>
                <li>hello
                    <button>hello</button>
                </li>
            </ul> */}
        </div>
    )
}