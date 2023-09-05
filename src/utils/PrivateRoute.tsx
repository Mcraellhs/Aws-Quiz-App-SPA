import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

export default function PrivateRoute() {
      let auth=false;

      
       const token= localStorage.getItem('token');
       if(token){
        const decode:any =jwt_decode(token)
        if(decode.exp>decode.iat && decode.role=='ADMIN'){
         auth=true
        }
       }
       
   

  return (
    auth?
    <Outlet/>:
    <Navigate to={'/login'}/>
  )
}
