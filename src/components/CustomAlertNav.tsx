import React from 'react'
import '../css/custom-alert-nav.css'

export default function CustomAlertNav(data:{message:string,isTrue:boolean}) {
    const customStyles={
        success:'RGB(25, 135, 84)',
        error:'rgb(166, 4, 4)'
    }

    const backgroundColor = data.isTrue ? customStyles.success : customStyles.error;
  return (
    <div className='custom-alert-nav' style={{ backgroundColor }}>
        <h1>{data.message}</h1>
    </div>
  )
}
