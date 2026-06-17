import { use, useContext, useRef, useState } from "react";
import { BiryaniContext } from "../../Contexts/BiryaniContext";
function TodoCard(){
    const [Todos,setTodos] = useState([])
    const [Task,setTask]= useState("")
    const {dish}= useContext(BiryaniContext)
    function handleSubmit(){
        setTodos([...Todos,Task])
        console.log(Todos)
        //console.log("Captain I received new task")
        
        setTask("")

    }
    return(
        <div className="container col-lg-5">
            <div className="card card-body">
                    <h1 className="text-center">Todo Form</h1>
                        <h6>dish : {dish}</h6>
                    <div className="p-2 border-dark border rounded-1">
                        <h3>List of Tasks : </h3>
                        <ul>
                            <li>Dummy Task</li>
                            {
                                Todos.map((todo,index)=>(
                                    <li key={index}>{todo}</li>
                                ))
                            }
                        </ul>

                    </div>
                    <br />
                    <input onChange={(e)=>{setTask(e.target.value)}} type="text" value={Task} className="form-control mb-4" />
                    <button onClick={handleSubmit} className="btn btn-success">Add Task</button>
            </div>
        </div>
    )
}

export default TodoCard;