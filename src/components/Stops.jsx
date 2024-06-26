import { useEffect, useState } from 'react'
import axios from 'axios'

function Stops({ idDeparture }) {
    const [nextStops, setNextStops] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios
            .get(`https://api.sncf.com/v1/coverage/sncf/vehicle_journeys/${idDeparture}`,
            {
                headers: {
                    Authorization : `${import.meta.env.VITE_APP_API_TOKEN}`,
                },
            })
                const stops = response.data.vehicle_journeys[0].stop_times.map(
                    (stop) => stop.stop_point.name
                )
                setNextStops(stops)
        }
        fetchData()
    },[])

  return (
    <div className='departure__stops'>
        <ul className='stops'>
            {
                nextStops.map((stop, index) => (
                    <li className='stops__station' key={stop}>
                        {stop}
                        <img src="/images/yellow.jpg" alt="yellow point" style={{
                            display: `${index === nextStops.length - 1 ? 'none' : 'inline'}`
                        }}/>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Stops