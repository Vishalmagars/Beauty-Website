import React, { Component } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Service'
import Testimonials from '../components/Testimoanl'
import Header from '../components/Header'
import FindUs from '../components/FindUs'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Hero/>
        <About/>
        <Services/>
        <Testimonials/>
        <FindUs/>
      </div>
    )
  }
}
