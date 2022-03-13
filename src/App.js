import React from 'react'
import Navbar from './layout/Navbar'
import { Route } from 'react-router-dom'

// pages
    import  Home from './Page/Home'
// finish pages

export default function App() {
  return (
    <div>
      
            <Navbar />
                 <Route path="/" component={<Home />}/> 

    </div>
  )
}

