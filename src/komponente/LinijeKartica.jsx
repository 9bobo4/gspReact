import React from 'react'
 
 
 

function LinijeKartica({linija}) {
  return (
    <div >
      <div className="card">
 
        <h1>{linija.brojLinije}</h1>
        <p className="price"> {linija.pocetnaStanica}</p>
        <p className="price"> {linija.krajnjaStanica}</p>

        <p> {linija.vreme}</p>
        <p> {linija.zona}</p>

        <p><button>Dodaj u omiljene linije</button></p>
      </div>




    </div>
  );
}

export default LinijeKartica;