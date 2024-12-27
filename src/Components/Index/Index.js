import React from 'react'
import Nav from '../Nav/Nav'
import Header from '../Header/Header'
import Underheader from '../Underheader/Underheader'
import Exampleproject from '../Exampleproject/Exampleproject'
import Datas from '../Datas/Datas'
import History from '../History/History'
import Latestblog from '../Latestblog/Latestblog'
import About from '../About/About'
import Footer from '../Footer/Footer'

export default function Index() {
  return (
    <div>
        <Nav/>
        <Header/>
        <Underheader/>
        <Exampleproject/>
        <Datas/>
        <History/>
        <Latestblog/>
        <About/>
        <Footer/>
    </div>
  )
}
