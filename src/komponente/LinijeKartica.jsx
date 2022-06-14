import React from 'react'
 
 
 

function LinijeKartica({linija,dodajOmiljenu,mod,izbaciIzOmiljenih}) { //mod-1 ako je kartica prikaz linije, 0- ako je kartica omiljena
  return (
    <div >
      <div className="card">
 
        <h1>{linija.brojLinije}</h1>
        <p className="price"> {linija.pocetnaStanica}</p>
        <p className="price"> {linija.krajnjaStanica}</p>

        <p> {linija.vreme}</p>
        <p> {linija.zona}</p>
        {mod==1 ? 
        <p><button onClick={()=>dodajOmiljenu(linija.id)}>Dodaj u omiljene linije</button></p>
        :
        <p><button onClick={()=>izbaciIzOmiljenih(linija.id)}>Izbaci iz omiljenih</button></p>
        }
        
      </div>




    </div>
  );
}

export default LinijeKartica;