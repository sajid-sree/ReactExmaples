import { useState } from "react";
import { BiryaniContext } from "./BiryaniContext";



function BiryaniProvider({children}){
    const [dish,setDish] = useState("Hyderabadi Chicken Dum Biryani")


    return(
        <BiryaniContext.Provider value={{dish,setDish}}>
                {children}
        </BiryaniContext.Provider>
    )
}


export default BiryaniProvider;