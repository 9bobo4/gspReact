 
import './App.css';
import Footer from './komponente/Footer';
import NavBar from './komponente/NavBar';
import Pocetna from './komponente/Pocetna';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Kontakt from './komponente/Kontakt';
function App() {
  return (
    <div >
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Pocetna></Pocetna>} />
          <Route path="/kontakt" element={<Kontakt></Kontakt>} />
        </Routes>
       
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
