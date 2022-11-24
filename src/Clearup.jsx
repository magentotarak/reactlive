import React, { useState, useEffect } from 'react';



const Clearup = () => {

const [widthcount, setWidthcount ] = useState (window.screen.width);    

const  currentScreenwidth = () => {
    
    setWidthcount  (() => window.innerWidth );

};



useEffect(() => {

    window.addEventListener("resize", currentScreenwidth);
    return () => {

      window.removeEventListener ( 'resize', currentScreenwidth );

    }

});


    return(

      
      
      <p>   The screensize is <strong>{widthcount}</strong> </p>


 );

} 

export default Clearup;