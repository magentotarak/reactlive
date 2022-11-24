import React from "react";
import Sdata from "./Sdata";
import Cardbox from "./Cards";



const Instagram = () => {
return(
<>
<Cardbox
key={Sdata[1].id} 
anchlink={Sdata[1].link}
photos={Sdata[1].photo}
heading={Sdata[1].head}
discription={Sdata[1].discrip}
avterphoto={Sdata[1].avter}
postauther={Sdata[1].auther}
posttime={Sdata[1].postt}
/>

<Cardbox
key={Sdata[3].id} 
anchlink={Sdata[3].link}
photos={Sdata[3].photo}
heading={Sdata[3].head}
discription={Sdata[3].discrip}
avterphoto={Sdata[3].avter}
postauther={Sdata[3].auther}
posttime={Sdata[3].postt}
/>

</>
);
}


export default Instagram;