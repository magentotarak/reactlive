import React from 'react';
import "./index.css";
import Images from './Images';
import Heading from './Heading';




function Cardbox(cardprops){
  

return (
<>

  <a className='card' href={cardprops.anchlink}>
    <div className='card-hero'>
      <Images photos={cardprops.photos} />
    </div>
    <div className='card-header'>
      <Heading heading={cardprops.heading}/>
    </div>
    <div className='card-body'>
      <p>{cardprops.discription}</p>
    </div>
    <div className='card-footer'>
      <div className='footer-item'>
        <img src={cardprops.avterphoto} className='avatar' width='32' height='32' alt='Auther' />
      </div>
      <div className='footer-item'>
        <strong>{cardprops.postauther}</strong>
        <span className='muted'>{ cardprops.posttime}</span>
      </div>
    </div>
  </a>
  




</>
);


}

export  default Cardbox;