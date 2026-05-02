import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import DojoPage from "./pages/DojoPage"
import TechniquePage from "./pages/TechniquePage"
import Scrolls from "./pages/Scrolls"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dojo/:slug" element={<DojoPage/>} />
        <Route path="/technique/:slug" element={<TechniquePage/>} />
        <Route path="/scrolls" element={<Scrolls/>} />
      </Routes>
    </>
  )
}

export default App
