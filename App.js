import "./App.css";
import { Header } from "./Components/Header";
import { Card } from "./Components/Card";
import { ImageCard } from "./Components/ImageCard";
import { ImageSection } from "./Components/ImageSection";
import { Slider } from "./Components/Slider";
import { About } from "./Components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { Gallary } from "./Components/Gallary";
import { Home } from "./Components/Home";
import { Footer } from "./Components/Footer";
import { Service } from "./Components/Service";
import { Registration } from "./Components/Registration";
import ContactDetails from "./Components/ContactDetails";

export function App() {
  return (
    <>
      <Header />
      
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/gallary" element={<Gallary/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/contactdetails" element={<ContactDetails/>}/>
        </Routes>
      </Router>
        <br></br>
      <Footer/>

    </>
  );
}
