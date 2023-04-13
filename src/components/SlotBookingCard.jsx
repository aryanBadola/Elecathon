import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const SlotBookingCard = ({slotNo, availability}) => {

  const location = useLocation();
  
  
  const clickhandle=()=> {
    console.log(slotNo);
    console.log(location.pathname);
  }

  return (
   
        
    <a href="#" className='booking-card' onClick={()=>clickhandle()}>
      <div className='booking-content'>
        <h1 className='booking-category'>{`Slot No = ${slotNo+1}`}</h1>
        <h2 className='booking-heading'>{`Available slots = ${availability}`}</h2>
       
      </div>
    </a>

           
  
  )
}

export default SlotBookingCard

//     <div><h1>{`Slot ${slotNo} = ${availability}`}</h1></div>
