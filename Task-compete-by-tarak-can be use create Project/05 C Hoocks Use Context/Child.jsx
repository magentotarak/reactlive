import React from "react";
import { useContext } from "react";
import { AppContext } from "./Usecontext";




const Child  = () => {

const  userdata = useContext(AppContext)

return <div> My Name is {userdata.name} And i am a {userdata.role}</div>



};


export default Child;