import React from 'react'
import { useEffect } from 'react';
import { decodeToken } from 'react-jwt';
import { useHistory } from 'react-router-dom';

const OwnerBody = () => {

    const history = useHistory();
    useEffect(()=>{
        const ownerToken = localStorage.getItem("ownertoken")
        if(!ownerToken) return history.replace("/ownersignin")

        const owner = decodeToken(ownerToken)

    },[])


    const logoutFunction = () => {
        localStorage.removeItem("ownertoken")
        history.replace("/ownersignin")
    }

  return (
    <div>Owner Body
        <button onClick={logoutFunction}>Logout</button>
    </div>
  )
}

export default OwnerBody