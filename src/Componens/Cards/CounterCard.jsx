import { useContext, useEffect,useRef, useState } from "react";
import Navbar from "../Sections/Navabar";
import { BiryaniContext } from "../../Contexts/BiryaniContext";

function CounterCard() {

  let [count,setCount]=useState(0)
  let [age,setAge]=useState(12)
  const inputRef1 = useRef("Kuch nai")

  const {dish,setDish} = useContext(BiryaniContext)

  //console.log("Component Rendered")
  useEffect(
    ()=>{
        console.log("Arrow function executed !")
        inputRef1.current=count
  },[count])

  return (
    <div className="card card-body">
      <h1>RR Institute of Technology</h1>
      <h2>Dish name is : {dish}</h2>
      <h2 className="bg-warning p-3 text-white"> count :{count}</h2>
      <h2 className="bg-warning p-3 text-white">age : {age}</h2>
      <h2>Previous Count : {inputRef1.current}</h2>
      <div className="flex">

        <div>
          <button type="button" onClick={()=>{setAge(age+1)}}>Add Age</button>
        </div>
        <button 
        onClick={
            ()=>{
                setCount(count-1)
            }
            } className="btn btn-primary">
                
        -
        </button>

        <button 
        onClick={
            ()=>{
                setCount(count+1)}
                } 
        className="btn btn-primary"> +
        </button>

        <button onClick={()=>setDish("Hyderabadi Mutton Dum Biryani")} type="button" className="btn btn-primary">Change dish </button>

        
      </div>
    </div>
  );
}

export default CounterCard;
