import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getAllSlots } from '../actions/allSlotsAction';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import SlotBookingCard from '../components/SlotBookingCard';

import '../components/slot-booking-card.css';

const AllSlots = () => {

    const dispatch = useDispatch();


    const {areaName} = useParams();
    console.log(areaName);

    const { loading, error, slot } = useSelector(state=>state.allSlots);
    
    useEffect(()=>{
        dispatch(getAllSlots(areaName));
    
    },dispatch,areaName,slot);

    
    const {timeslot} = slot ;
    console.log(timeslot);


  return (
    <>
        
        <section className='booking-hero'>
          <div className='booking-card-grid'>
          {timeslot &&
                timeslot?.map((item,i)=>(
                     /* <h1>{`Slot ${i + 1} = ${item.availability}`}</h1>  */
                    
                    <SlotBookingCard slotNo={i} availability={item.availability}/>
                   
                   
                   
                ))}
          </div>
        </section>
        <button>Submit</button>      
                
       
    </>
  )
}

export default AllSlots