import { BrowserRouter, Route, Routes } from "react-router";
import Landing from "./pages/Landing";
import Expertice from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { useEffect } from "react";
import AOS from 'aos';


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  },[])

    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Expertice />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    )
  }

export default App

