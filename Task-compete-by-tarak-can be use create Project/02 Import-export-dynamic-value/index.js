import React from 'react';
import  ReactDOM  from 'react-dom';
import mname , {count, role, experin, skills} from './App';






ReactDOM.render(


<div className='recwrappe'>
<ol>

<li>My Name is {mname}</li> 
<li>I am from  {count}</li>
<li>I am a {role()}</li>
<li>I have  {experin()} Experince</li>
<li>Now i am learning {skills()} </li>
<li>the come is { 23 * 9 + 35 +10 } </li>
<li>The total estimate is {24+20+10+6+18+22+40} Plus medicine 20 total is 160</li>

<li>Our charges {5 + 30 + 10 +30 +21 +20 } Home use 10 So total is <strong>126</strong> </li>
<li>Transfer at 13th Sept 60 + 30 +40 = {60+30+40}</li>


</ol>
</div>



, document.getElementById ("root")




);