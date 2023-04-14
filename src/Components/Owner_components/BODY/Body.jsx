import React, { useState } from 'react'
import { useEffect } from 'react';
import { decodeToken } from 'react-jwt';
import { Route, Switch, useHistory } from 'react-router-dom';
import Base from '../BASE/Base';
import OwnerSidebar from '../Sidebar/Sidebar';
import Foodlist from '../Food/Food';
import Nopage from '../../NOPAGE/nopage';
import Customer from '../Customer/Customer';

const OwnerBody = ({ownerFoodsDetails,setOwnerFoodsDetails,customersData, setCustomerData}) => {
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

      <Switch>
        
        <Route exact path="/ownerdash">
          <div>
            hi i am income
          </div>

        </Route>

        <Route exact path="/ownerdash/orders">
          <div>
            hi i am orders
          </div>

        </Route>
        <Route exact path="/ownerdash/foods">
          <Foodlist
          ownerFoodsDetails={ownerFoodsDetails}
          setOwnerFoodsDetails={setOwnerFoodsDetails}
          />

        </Route>
        <Route exact path="/ownerdash/customers">
          <Customer
          customersData={customersData}
          setCustomerData={setCustomerData}
          />

        </Route>
        <Route path="**">
          <Nopage/>
        </Route>
      </Switch>
    
    </Base>
  )
}

export default OwnerBody