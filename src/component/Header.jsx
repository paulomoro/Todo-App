
export default function Header (prop){



    return(
        <div className= {prop.darkMode ? "header dark" : "header"}>
            <div className="head">
            <h1 className="title">TODO LIST</h1> 

            </div>
            
            <p>welcome!!! input a list of all your TODO Task</p>
        </div>
    )
}