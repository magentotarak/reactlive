import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Home';
import Aboutpage from './Pages/About';
import Servicepage from './Pages/Service';
import Error from './Pages/Error';
import Menu from './Menu';




const Pageredirect = () => {
  return (
    <>
    <Menu/>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/about" element={<Aboutpage />} />
        <Route exact path="/service" element={<Servicepage />} />
        <Route path="*" element={<Error />} />
      </Routes>

    </>

  )
}

export default Pageredirect
