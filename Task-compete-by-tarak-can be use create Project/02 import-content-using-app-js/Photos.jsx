import React from "react";

const img001 = 'https://picsum.photos/200/300';
const img002 = 'https://picsum.photos/250/300';
const img003 = 'https://picsum.photos/300/300';
const linkbew = 'https://www.youtube.com/'


function Photos(){

return (
<>
<a href={linkbew}><img src={img001} alt='MYimage' /></a>
<img src={img002} alt='MYimage' />
<img src={img003} alt='MYimage' />
</>
);


    
}

export default Photos;