import React from 'react'
import '../css/custom-alert.css';

export default function CustomAlert(data:{message:string}) {
  return (
    <div className="overlay">
        <div className='custom-alert'>
        
        {data.message}


        <button>Close</button>
        
        </div>
    </div>
  )
}
