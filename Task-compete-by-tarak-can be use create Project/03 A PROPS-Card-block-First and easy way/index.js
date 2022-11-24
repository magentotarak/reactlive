import React from 'react';
import  ReactDOM  from 'react-dom';
import Cardbox from './App';





ReactDOM.render(
<>

<h1>Blog Cards</h1>
<div className='cards'>

<Cardbox 
anchlink="https://www.google.com/"
photos="https://picsum.photos/id/1/5616/3744"
heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim facilisis gravida neque convallis a. Volutpat diam ut venenatis tellus."
avterphoto="https://picsum.photos/id/1074/5472/3648"
postauther="John Doe"
posttime="2h ago"
/>


<Cardbox 
anchlink="https://www.google.com/"
photos="https://picsum.photos/id/1005/5760/3840"
heading="ipsum dolor Lorem  sit amet, consectetur adipiscing elit"
discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim facilisis gravida neque convallis a. Volutpat diam ut venenatis tellus."
avterphoto="https://picsum.photos/id/1074/5472/3648"
postauther="Tarak Doe"
posttime="3h ago"
/>



<Cardbox 
anchlink="https://www.google.com/"
photos="https://picsum.photos/id/1011/5472/3648"
heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
discription="Adipiscing ipsum dolor Lorem sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim facilisis gravida neque convallis a. Volutpat diam ut venenatis tellus."
avterphoto="https://picsum.photos/id/1074/5472/3648"
postauther="Nandi Doe"
posttime="4h ago"
/>


</div>



</>



, document.getElementById ("root")




);