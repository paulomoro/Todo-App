
export default function Task(prop){


    return(
        <div className="task">
            <ol>
                {prop.tasks.map((task,index)=>(
                    <li key={index}>{task} </li>
                ))}
            </ol>
        </div>
    )
}