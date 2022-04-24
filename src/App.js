// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
// import Footer from './components/Footer';
import Service from './components/Service';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './components/Contact';


function App() {
  return (

<>
   <BrowserRouter>
   <Navbar/>
      <Routes>

      <Route path="/" element= {<Home/>} />
      <Route path="/about" element= {<About/>} />
      <Route path="/service" element= {<Service/>} />
      <Route path="/contact" element= {<Contact/>} />
      </Routes>

    </BrowserRouter>
    {/* <Footer/> */}
 
    </>

  );
}

export default App;
