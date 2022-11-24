import React from "react";
import Sdata from "./Sdata";
import Cardbox from "./Cards";



const Facebook = () => {
return(
<>
<Cardbox
key={Sdata[0].id} 
anchlink={Sdata[0].link}
photos={Sdata[0].photo}
heading={Sdata[0].head}
discription={Sdata[0].discrip}
avterphoto={Sdata[0].avter}
postauther={Sdata[0].auther}
posttime={Sdata[0].postt}
/>

<Cardbox
key={Sdata[2].id} 
anchlink={Sdata[2].link}
photos={Sdata[2].photo}
heading={Sdata[2].head}
discription={Sdata[2].discrip}
avterphoto={Sdata[2].avter}
postauther={Sdata[2].auther}
posttime={Sdata[2].postt}
/>

</>
);
}


export default Facebook;