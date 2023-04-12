import React from 'react'
import { useEffect } from 'react';
import { decodeToken } from 'react-jwt';
import { useHistory } from 'react-router-dom';
import Base from '../BASE/Base';

const OwnerBody = () => {

    const history = useHistory();
    useEffect(()=>{
        const ownerToken = localStorage.getItem("ownertoken")
        if(!ownerToken) return history.replace("/ownersignin")
        const owner = decodeToken(ownerToken)

    },[])

  return (
    <Base>
    
    hey
    </Base>
  )
}

export default OwnerBody