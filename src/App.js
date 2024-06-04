import Navbar from "./components/NavBar"
import Projects from "./pages/Projects"
import Home from "./pages/Home"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/portfolio-website" element={<Home />} />
          <Route path="/portfolio-website/projects" element={<Projects />} />
          <Route path="/portfolio-website/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App
