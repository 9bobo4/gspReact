 
import './App.css';
import Footer from './komponente/Footer';
import NavBar from './komponente/NavBar';
import Pocetna from './komponente/Pocetna';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Kontakt from './komponente/Kontakt';
import Linije from './komponente/Linije';
import { useState } from "react";
function App() {

  const [linije] = useState([

    {
      id:1,
      brojLinije:15,
      pocetnaStanica:"Zemun novi grad",
      krajnjaStanica:"Zeleni venac",
      vreme: 67,
      zona:1,


    },
    {
      id:2,
      brojLinije:78,
      pocetnaStanica:"Zemun novi grad",
      krajnjaStanica:"Banjica",
      vreme: 70,
      zona:1,


    },
    {
      id:3,
      brojLinije:45,
      pocetnaStanica:"Zemun novi grad",
      krajnjaStanica:"Blok 44",
      vreme: 56,
      zona:1, 
    },
    {
      id:4,
      brojLinije:708,
      pocetnaStanica:"Zemun novi grad",
      krajnjaStanica:"Zemun polje",
      vreme: 45,
      zona:2, 

    }, 

  ]);











  return (


    <div >
      <BrowserRouter>
        <NavBar></NavBar>
        
        <Routes>
          <Route path="/" element={<Pocetna></Pocetna>} />
          <Route path="/kontakt" element={<Kontakt></Kontakt>} />
          <Route path="/linije" element={<Linije linije={linije}></Linije>} />
        </Routes>
       
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
