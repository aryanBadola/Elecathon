import React from 'react'
import { Link } from 'react-router-dom'


const SlotCard = ({areaName, description, imgUrl}) => {

    console.log(description);
    console.log(imgUrl);

  return (
   
      
      <a href="#" className='card'>
      <Link to={`/slot/${areaName}`}>
          <div className='background' style={{ 
      backgroundImage: `url(${imgUrl})` 
    }}></div>
          <div className='text-content' >
            <h1 className='heading'>{areaName}</h1>
              <p className='description'>{description}</p>

          </div>
          </Link>
        </a>
      
     
        
      
 
  )
}

export default SlotCard

