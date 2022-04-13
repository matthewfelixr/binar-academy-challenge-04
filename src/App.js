import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Components/Footer/Footer'
import Result from './Pages/Result'
import Detail from './Pages/Detail'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/result" element={<Result/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App