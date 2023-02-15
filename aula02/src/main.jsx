import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './navbar/navbar'
import Content from './content/content'
import Footer from './footer/footer'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Content />
    <Footer/>
  </React.StrictMode>,
)
