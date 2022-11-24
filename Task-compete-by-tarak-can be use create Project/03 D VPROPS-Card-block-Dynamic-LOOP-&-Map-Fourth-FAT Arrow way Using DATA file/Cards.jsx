import React from 'react';
import "./index.css"




function Cardbox(cardprops){
  

return (
<>

  <a className='card' href={cardprops.anchlink}>
    <div className='card-hero'>
      <img src={cardprops.photos} width='288' alt='HERO'  />
    </div>
    <div className='card-header'>
      <h3>{cardprops.heading}</h3>
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