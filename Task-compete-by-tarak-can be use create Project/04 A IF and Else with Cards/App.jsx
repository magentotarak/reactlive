import React from 'react';
import Facebook from './Facebook';
import Instagram from './Instagram';




//const febseris = "facebook";
const febseris = "Instagram";

const Fabs = () => {

if (febseris === 'facebook'){
      return <Facebook/>;
}
else{

   return <Instagram/>;

};
};

const App = () => (

<>
<h1>Blog Cards</h1>
<div className='cards'>
<Fabs/>

</div>

</>
);

export default App;
