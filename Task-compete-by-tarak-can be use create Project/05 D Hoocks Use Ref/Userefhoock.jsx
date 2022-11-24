import React from "react";
import { useRef } from "react";



const Refhoock = () => { 
const inputref = useRef();


const changeBroder = () => {
 
    inputref.current.focus();
    inputref.current.style.backgroundColor = "red";

};

return(


    <>
    
    <input type="text" ref={inputref}/>
   <button onClick={changeBroder}>Submit</button>
    
    </>






);
};


export default Refhoock;