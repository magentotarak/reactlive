import React from 'react';
import  ReactDOM  from 'react-dom';
import Cardbox from './Cards';
import Sdata from './Sdata'

function tarakcard(values){

return(

<Cardbox 
anchlink={values.link}
photos={values.photo}
heading={values.head}
discription={values.discrip}
avterphoto={values.avter}
postauther={values.auther}
posttime={values.postt}
/>
);
    
}


ReactDOM.render(
<>

<h1>Blog Cards</h1>
<div className='cards'>

{Sdata.map(tarakcard)}


</div>



</>



, document.getElementById ("root")




);