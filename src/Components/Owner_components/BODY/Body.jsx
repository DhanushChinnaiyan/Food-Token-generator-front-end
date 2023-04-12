import React, { useState } from 'react'
import { useEffect } from 'react';
import { decodeToken } from 'react-jwt';
import { useHistory } from 'react-router-dom';
import Base from '../BASE/Base';
import OwnerSidebar from '../Sidebar/Sidebar';

const OwnerBody = () => {
  const [sideBarCliked, setSideBarClicked] = useState(false)
    const history = useHistory();
    useEffect(()=>{
        const ownerToken = localStorage.getItem("ownertoken")
        if(!ownerToken) return history.replace("/ownersignin")
        const owner = decodeToken(ownerToken)

    },[])

  return (
    <Base
    sideBarCliked={sideBarCliked}
      setSideBarClicked={setSideBarClicked}
    
    >
    
    hey
    {
      sideBarCliked && <OwnerSidebar/>
    }
    </Base>
  )
}

export default OwnerBody