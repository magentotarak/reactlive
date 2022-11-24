import React from 'react';
import  ReactDOM  from 'react-dom';

const mname = 'tarak';
const img001 = 'https://picsum.photos/200/300';
const img002 = 'https://picsum.photos/250/300';
const img003 = 'https://picsum.photos/300/300';
const linkbew = 'https://www.youtube.com/'


ReactDOM.render(

<>

<h1 contentEditable="true" >This is {mname} Playlist</h1>
<h2>Top {2+1} play list</h2>

<a href={linkbew}><img src={img001} alt='MYimage' /></a>
<img src={img002} alt='MYimage' />
<img src={img003} alt='MYimage' />

</>


, document.getElementById ("root")




);