import React from 'react'
import { useState } from 'react';


const Demoevent = () => {

    const mycolour = "#8e44ad"; 
    const [backcolur, setBackcolur] = useState(mycolour);
    const [btnname, setBtnname] = useState("Click Me here");

    const bgchange = () =>{

     let newbackcolur = "#344953";
     setBackcolur (newbackcolur);
     setBtnname ("Cool 👍");


    };

    const revertback = () =>{

        let newbackcolur = "#8e44ad";
        setBackcolur (newbackcolur);
        setBtnname ("Click Me here");
   
   
    };


  return (

     <>
    
    <div className='eventdemocontener' style={{backgroundColor : backcolur}}>
    <p>onClick chnage Bg and button text</p> 
    <p>ondubleclick Revert back BG and Button.</p>

    <button onClick={bgchange} onDoubleClick={revertback}>{btnname}</button>
    </div>
    
     </>

   );
}

export default Demoevent