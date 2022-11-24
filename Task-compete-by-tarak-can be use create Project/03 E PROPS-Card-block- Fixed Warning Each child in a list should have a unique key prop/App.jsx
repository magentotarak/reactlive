import React from 'react';
import Cardbox from './Cards';
import Sdata from './Sdata'



const App = () => (

<>
<h1>Blog Cards</h1>
<div className='cards'>

{Sdata.map( (values) => {

return (
<Cardbox
key={values.id} 
anchlink={values.link}
photos={values.photo}
heading={values.head}
discription={values.discrip}
avterphoto={values.avter}
postauther={values.auther}
posttime={values.postt}
/>
);
}
)
}

</div>

</>
);

export default App;
