import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Haeder from './components/Haeder';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Haeder />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
