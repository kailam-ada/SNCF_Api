import { useState } from "react"
import Departures from "./Departures"

function TrainStation() {
    const [departureMode, setDepartureMode] = useState(true)
  return (
    <div className="train-station">
        <div className="directions">
            <button type="button" 
            className={`directions__departures ${departureMode ? 'directions__departures--active' : ''}`} 
            onClick={() => setDepartureMode(true)}
            >
                Départs
            </button>
            <button type="button" 
            className={`directions__arrivals ${departureMode ? '' : 'directions__arrivals--active'}`} 
            onClick={() => setDepartureMode(false)}
            >
                Arrivées
            </button>
        </div>
        {departureMode && <Departures />}
    </div>
  )
}

export default TrainStation