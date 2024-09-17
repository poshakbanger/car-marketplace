import { SignInButton } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './components/ui/button'
import Header from './components/Header'
import Hero from './components/Hero'
import Category from './components/Category'
import MostSearchedCars from './components/MostSearchedCars'
import InfoSection from './components/InfoSection'
import Footer from './components/Footer'

function Home() {
  return (
    <div>
      {/* <SignInButton mode='modal' forceRedirectUrl='/' >
        <Button>Sign Up</Button>
      </SignInButton> */}
      {/*Header*/}
      <Header/>
      {/*Hero*/}
      <Hero/>
      {/* Category*/}
      <Category/>
      {/*Most Searched cars*/}
      <MostSearchedCars/>
      {/*Infosection*/}
      <InfoSection/>
      {/*Footer*/}
      <Footer/>
    </div>
  )
}

export default Home