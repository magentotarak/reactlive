import React, { useState, useEffect } from 'react';





const Usestatecomp = () => {

const [count, setcount ] = useState (0);    


useEffect (() => {

    document.title = count;
}, [count]);

return(


    <>
    
    
    <div>
      <h1>Introducing Hoocks</h1>
    </div>
<div className='counter-wrapper'>
    <button onClick={() => setcount (count + 1)}>Add</button>
    <h2>{count}</h2>
    <button onClick={() => (count === 0 ? setcount (0) : setcount (count - 1))}>Minus</button>
</div>
   
    
    </>






);
}


export default Usestatecomp;