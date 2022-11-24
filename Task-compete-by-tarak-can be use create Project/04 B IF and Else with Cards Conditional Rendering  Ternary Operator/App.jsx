import React from 'react';
import Facebook from './Facebook';
import Instagram from './Instagram';




//const febseris = "facebook";
const febseris = "instagram";



const App = () => (

<>
<h1>Blog Cards</h1>
<div className='cards'>
{febseris === 'facebook' ? <Facebook/> : <Instagram/>}

</div>

</>
);

export default App;
