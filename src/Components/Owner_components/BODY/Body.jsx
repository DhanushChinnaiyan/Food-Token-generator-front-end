import React, { useState } from 'react'
import { useEffect } from 'react';
import { decodeToken } from 'react-jwt';
import { Route, Switch, useHistory } from 'react-router-dom';
import Base from '../BASE/Base';
import OwnerSidebar from '../Sidebar/Sidebar';
import Foodlist from '../Food/Food';
import Nopage from '../../NOPAGE/nopage';
import Customer from '../Customer/Customer';
import Orders from '../Orders/Orders';
import Income from '../Income/Income';

const OwnerBody = () => {
  const [sideBarCliked, setSideBarClicked] = useState(false)
  const [customersData, setCustomerData] = useState([]);
  const [ownerFoodsDetails, setOwnerFoodsDetails] = useState([]);
  const [OrdersList,setOrdersList] = useState([])

    const history = useHistory();
    useEffect(()=>{
        const ownerToken = localStorage.getItem("ownertoken")
        if(!ownerToken) return history.replace("/ownersignin")
        const owner = decodeToken(ownerToken)

        const getfoodList = async () => {
          try {
            const response = await fetch(
              "https://food-token-generator-backend.vercel.app/owner/food",
              {
                method: "GET",
                headers: {
                  "x-auth-ownertoken": localStorage.getItem("ownertoken"),
                },
              }
            );
    
            const data = await response.json();
            setOwnerFoodsDetails(data);
          } catch (error) {
            console.log("get food error", error);
          }
        };
        const getCustomer = async () => {
          try {
            const customerResponse =await fetch("https://food-token-generator-backend.vercel.app/customer", {
              method: "GET",
              headers: {
                "x-auth-ownertoken": localStorage.getItem("ownertoken"),
              },
            });
    
            const data = await customerResponse.json();
            setCustomerData(data);
          } catch (error) {
            console.log("get customer error", error);
          }
        };


      const getOrdersList = async() => {
        try {
          const response = await fetch("https://food-token-generator-backend.vercel.app/ownertoken",{
            method:"GET",
            headers:{
              "x-auth-ownertoken":localStorage.getItem("ownertoken")
            }
          })

          const data = await response.json();
          setOrdersList(data)
          
        } catch (error) {
          console.log("Orders List Error ",error)
        }
      }


        getfoodList();
        getCustomer();
        getOrdersList();

    },[])

   
 

  return (
    <Base
    sideBarCliked={sideBarCliked}
      setSideBarClicked={setSideBarClicked}
    
    >

      <Switch>
        
        <Route exact path="/ownerdash">
          <Income/>

        </Route>

        <Route exact path="/ownerdash/orders">
          <Orders
          OrdersList={OrdersList}
          setOrdersList={setOrdersList}
          />

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