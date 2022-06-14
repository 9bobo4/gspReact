import React from 'react'
import LinijeKartica from './LinijeKartica';
 
function Linije({linije}) {
  return (
    <div className='sveLinije'>
      {linije.map((l)=>(<LinijeKartica key={l.id} linija={l}></LinijeKartica>))}

       
    </div>
  );
}

export default Linije;
