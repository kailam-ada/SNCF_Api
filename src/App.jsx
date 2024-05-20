import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import City from "./pages/City"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:city" element={<City/>} />
      </Routes>
    </div>
  )
}

export default App
