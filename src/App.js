import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import AboutComponent from './components/about'
import ContactComponent from './components/contact'
import FooterComponent from './components/footer'
import HeaderComponent from './components/header'
import HomeComponent from './components/home'
import RegistrationComponent from './components/register'
import Sign from './components/sign'
import Land from './components/land'

export default function App() {
  return (
    <div>
    <BrowserRouter>
    <HeaderComponent/>
    <Routes>
    <Route path="/" element={<HomeComponent/>}/>
    <Route path="/about" element={<AboutComponent/>}/>
    <Route path="/contact" element={<ContactComponent/>}/>
    <Route path="/register" element={<RegistrationComponent/>}/>
    <Route path="/sign" element={<Sign/>}/>
    <Route path="/land" element={<Land/>}/>
    </Routes>
    <FooterComponent/>
    </BrowserRouter>
    </div>
  );
}
