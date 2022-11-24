import React from 'react';
import  ReactDOM  from 'react-dom';
import Cardbox from './Cards';
import Sdata from './Sdata'




ReactDOM.render(
<>

<h1>Blog Cards</h1>
<div className='cards'>

<Cardbox 
anchlink={Sdata[0].link}
photos={Sdata[0].photo}
heading={Sdata[0].head}
discription={Sdata[0].discrip}
avterphoto={Sdata[0].avter}
postauther={Sdata[0].auther}
posttime={Sdata[0].postt}
/>

<Cardbox 
anchlink={Sdata[1].link}
photos={Sdata[1].photo}
heading={Sdata[1].head}
discription={Sdata[1].discrip}
avterphoto={Sdata[1].avter}
postauther={Sdata[1].auther}
posttime={Sdata[1].postt}
/>

<Cardbox 
anchlink={Sdata[2].link}
photos={Sdata[2].photo}
heading={Sdata[2].head}
discription={Sdata[2].discrip}
avterphoto={Sdata[2].avter}
postauther={Sdata[2].auther}
posttime={Sdata[2].postt}
/>







</div>



</>



, document.getElementById ("root")




);