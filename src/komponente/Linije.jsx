import React from 'react'
import LinijeKartica from './LinijeKartica';
 
function Linije({linije,dodajOmiljenu}) {

  return (
    <div className='sveLinije'>
      {linije.map((l)=>(<LinijeKartica key={l.id} linija={l} dodajOmiljenu={dodajOmiljenu} mod={1} ></LinijeKartica>))}

       
    </div>
  );
}

export default Linije;
