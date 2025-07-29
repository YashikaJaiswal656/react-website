import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes,Route } from 'react-router-dom';

import App from './App.jsx'
import About from './about.jsx';
import Service from './service.jsx';
import Contact from './contact.jsx';
import Payment from './payment.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Service' element={<Service/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/Payment' element={<Payment/>}></Route>
      
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
