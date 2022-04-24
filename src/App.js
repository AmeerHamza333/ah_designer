// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Footerb from './components/Footerb';
import Service from './components/Service';
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import Contact from './components/Contact';


function App() {
  return (

<>
   <BrowserRouter>
   <Navbar/>
   
      <Routes>

      <Route exact path="/" element= {<Home/>} />
      <Route exact path="/about" element= {<About/>} />
      <Route exact path="/service" element= {<Service/>} />
      <Route exact path="/contact" element= {<Contact/>} />
      <Route path = '/ah_designer' element = {<Home/>}/>
      </Routes>

    </BrowserRouter>
 
    <Footerb/>
    </>

  );
}

export default App;
