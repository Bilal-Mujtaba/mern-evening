import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbarr from "./components/Navbar"
import Homepage from "./pages/Homepage"

function App() {
  
  return (
    <BrowserRouter>
    <Navbarr />
    <Routes>
    <Route path="/home" element={<Homepage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
