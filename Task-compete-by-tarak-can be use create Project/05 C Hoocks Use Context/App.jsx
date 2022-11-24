import React from 'react'
import Child from './Child'
import { AppProvider } from './Usecontext'

const App = () => {
  return (

<AppProvider>
   <Child/>
   </AppProvider>
   )
}

export default App
