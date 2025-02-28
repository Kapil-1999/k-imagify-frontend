import React from 'react'
import Header from '../component/Header'
import Steps from '../component/steps'
import Description from '../component/Description'
import GenerateButton from '../component/GenerateButton'

const Home = () => {
  return (
    <div>
      <Header />
      <Steps/>
      <Description />
      <GenerateButton />
    </div>
  )
}

export default Home