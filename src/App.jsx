import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Index from './Pages/Index'
import Listings from './Pages/Listing'
import PropertyDetail from './Pages/PropertyDetail'
import Agents from './Pages/Agents'
import Contact from './Pages/Contact'
import NotFound from './Pages/NotFound'
function App() {
  return (
 <>
    <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
 </>
  )
}

export default App
