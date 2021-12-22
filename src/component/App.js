import React from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './pages/Home'
import BuyNow from './pages/BuyNow'
import TakToken from './pages/TakToken'
import LearnMore from './pages/LearnMore'
import EvolutionLab from './pages/EvolutionLab'
import Attributes from './pages/Attributes';
import Calculator from './pages/Calculator';
import Comics from './pages/Comics';

function App() {
  return (
  
    <div className='container'>
       <Navbar/>
       <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route path="/buy_now" element={<BuyNow/>} />
    <Route path="/tak_token" element={<TakToken/>} />
    <Route path="/learn_more" element={<LearnMore/>} />
    <Route path="/attribute" element={<Attributes/>} />
    <Route path="/evolution_lab" element={<EvolutionLab/>} />
    <Route path="/learn_more" element={<LearnMore/>} />
    <Route path="/calculator" element={<Calculator/>} />
    <Route path="/tak_token" element={<TakToken/>} />
    <Route path="/comics" element={<Comics/>} />
    </Routes>
    </div>
  )
}

export default App;
