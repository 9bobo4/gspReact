import React from 'react'
import LinijeKartica from './LinijeKartica';
import {BsSearch} from "react-icons/bs"
import { useState } from "react";
function Linije({linije,dodajOmiljenu}) {
    const [searchTerm, setSearchTerm] = useState('');
    function handleInput(e){
        setSearchTerm(e.target.value.toLowerCase() );
        console.log(e.target.value);
      }
      
      
  return (
    
    <div className='sveLinije'>
    <input type="text" placeholder='Pretraga...' onChange={handleInput}></input>  <BsSearch />
    {searchTerm=='' ? 
        linije.map((l)=>(<LinijeKartica key={l.id} linija={l} dodajOmiljenu={dodajOmiljenu} mod={1} ></LinijeKartica>))
        :
        linije
        .filter((l)=> (l.pocetnaStanica.toLowerCase().includes(searchTerm) || l.krajnjaStanica.toLowerCase().includes(searchTerm)) )
        .map((l)=>(<LinijeKartica key={l.id} linija={l} dodajOmiljenu={dodajOmiljenu} mod={1} ></LinijeKartica>))
    }
    </div>
  );
}

export default Linije;
