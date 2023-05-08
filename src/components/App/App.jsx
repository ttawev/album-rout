import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Page from '../../page/Page'
import Nav from '../Nav'


import './App.css'

const App = () => {

   

  return (

    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Nav/>}/>
            <Route path='/page/:num' element={<Page/>}/>
        </Routes>
    </BrowserRouter>
    
  )
}

export default App