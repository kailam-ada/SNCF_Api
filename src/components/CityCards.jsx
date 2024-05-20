import stations from '../gares.json'
import CityCard from './CityCard'

function CityCards() {
    const cities = Object.keys(stations)
  return (
    <div className='city-cards'>
        {
            cities.map(city => {
                return <CityCard key={city} city={city} />
            })
        }
    </div>
  )
}

export default CityCards