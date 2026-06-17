import { useRef } from "react";


function RefCard(){

    const inputRef1 = useRef("Abhinav Comes late to class")


    const handleInput = (e)=>{
                inputRef1.current=e.target.value

                console.log(inputRef1.current)
            }

    return(
        <div className="container col-lg-6 card card-body">
            <h4 className="text-center mb-2">Example for useRef</h4>

            <div className="border border-black rounded-1 mb-2">
                <h1>{inputRef1.current}</h1>    
            </div>    

            <input onChange={handleInput} className="form-control mb-3" type="text" />
            <button onClick={()=>{

            }} className="btn btn-primary"> Add </button>

        </div>
    )
}

export default RefCard;