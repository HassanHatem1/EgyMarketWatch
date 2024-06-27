import React from 'react'
import './App.css'
import {Navbar,Header,NewsSection,Goldprices,Exchangerates,Footer } from './components'
const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
        </div>
        <div className='home__container'>
        <NewsSection />
        <Exchangerates />
        <Goldprices />
        </div>
        <Footer/>
    </div>
  )
}

export default App
