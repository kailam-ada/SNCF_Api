import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import City from "./pages/City"
import TrainStation from "./components/TrainStation"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:city" element={<City/>}>
          <Route path=':codeStation' element={<TrainStation/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
