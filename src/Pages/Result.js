import React, { useState, useEffect } from 'react'
import Card from '../Components/Card/Card'
import SecondHeader from '../Components/Header/SecondHeader'
import SecondSearch from '../Components/SearchBar/SecondSearch'
import axios from 'axios'
import '../Components/Card/card.css'

const Result = () => {

  const [cars, setCars] = useState([]);
    useEffect(() => {
        axios.get('https://rent-cars-api.herokuapp.com/admin/car')
            .then(res => {
                setCars(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

  return (
    <>
      <SecondHeader/>
      <SecondSearch/>
      <div className='container-card'>
      {cars && cars.map((car, index) => {
                    return(
                        <Card 
                            key={index}
                            id={car.id}
                            name={car.name}
                            price={car.price}
                            image={car.image}
                        />
                    )        
                })}
            
    </div>
    </>
  )
}

export default Result