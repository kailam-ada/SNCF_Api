import React from 'react'

function CityCard({ city }) {
  return (
    <div className='city-card' style={{ backgroundImage: `url(./images/${city}.webp)` }} >{city}</div>
  )
}

export default CityCard