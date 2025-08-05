

import { useState } from 'react'
import './App.css'
import Header from './Components/Layout/Header'
import Footer from './Components/Layout/Footer'
import HomePage from './Components/Pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import AboutPage from './Components/Pages/AboutPage'
import ContactPage from './Components/Pages/ContactPage'
import IndustriesPage from './Components/Pages/IndustriesPage'
import Login from './Components/Login'
import ProtectedRoute from './Components/ProtectedRoute'
import DashBoardPage from './Components/Pages/DashBoardPage'
import CarrerPage from './Components/Pages/CarrerPage'


function App() {
  return (
    <div className='flex flex-col min-h-screen '>
      <Header/>
      <main className='flex-grow'>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path='/industries' element={<IndustriesPage/>} />
          <Route path="/careers" element={<CarrerPage/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/dashboard' element={<ProtectedRoute><DashBoardPage/></ProtectedRoute>} />
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App