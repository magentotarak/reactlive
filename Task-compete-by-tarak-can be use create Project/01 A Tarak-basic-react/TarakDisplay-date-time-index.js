import React from 'react';
import  ReactDOM  from 'react-dom';

const mname = 'tarak';
const todate = new Date ().toLocaleDateString();
const totime = new Date ().toLocaleTimeString();

ReactDOM.render(

<>

<h1>This is {mname} Playlist</h1>
<h2>Top {4+5} play list</h2>

<p>Today date is = {todate}</p>
<p>Today date is = {totime}</p>

</>


, document.getElementById ("root")




);