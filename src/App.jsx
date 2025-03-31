import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import './css/global.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
