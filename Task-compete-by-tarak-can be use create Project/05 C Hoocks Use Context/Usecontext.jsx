import { createContext } from "react";


const AppContext = createContext ();


const AppProvider = ({children}) => {


    const  userdata = {

       name : 'tarak',
       role : 'React Developer',

    };


return <AppContext.Provider value={userdata}>{children}</AppContext.Provider>


};

export {AppContext, AppProvider };