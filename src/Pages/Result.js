import React from 'react'
import Card from '../Components/Card/Card'
import SecondHeader from '../Components/Header/SecondHeader'
import SecondSearch from '../Components/SearchBar/SecondSearch'
import '../Components/Card/card.css'

const Result = () => {
  return (
    <>
      <SecondHeader/>
      <SecondSearch/>
      <div className='container-card'>
            <Card/>
            <Card/>
            <Card/>
    </div>
      
    </>
  )
}

export default Result