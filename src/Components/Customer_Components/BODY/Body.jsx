import React from 'react'
import { useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import {decodeToken} from 'react-jwt'
import Base from '../../BASE/Base'
import CustomerSidebar from '../Sidebar/Sidebar'
import { useState } from 'react';
import FoodToken from '../Food/Food'
import AddtoCart from '../Cart/AddtoCart'


const Body = () => {
  const [sideBarCliked,setSideBarClicked]=useState(false)
  const [cartclicked,setCartClicked] = useState(false);
  const [tokenClicked,setTokenClicked] = useState(false);
  const [foodCategories,setFoodCategories] = useState([])

 const history = useHistory();



    useEffect(()=>{

      
        const customerToken = localStorage.getItem("customertoken")
        if(!customerToken) return history.replace("/customersignin")

        const customer = decodeToken(customerToken);
        if(!customer){
          localStorage.removeItem(customerToken)
            history.push("/customersignin")
        }


        const getfoodcategories = async()=>{




    
          try {
      
              const response = await fetch("http://localhost:9000/customer/food",{
                  method:"GET",
                  headers:{
                      "x-auth-customertoken":localStorage.getItem("customertoken")
      
                  }
              })
      
              const data = await response.json()
              setFoodCategories(data)
              console.log(foodCategories)
              
          } catch (error) {
              console.log("get food error",error)
          }
      }
     
      getfoodcategories()
  

    },[])
    

  return (
    <div>
       
            <MainContents

              sideBarCliked={sideBarCliked}
              setSideBarClicked={setSideBarClicked}
              cartclicked={cartclicked}
              setCartClicked={setCartClicked}
              tokenClicked={tokenClicked}
              setTokenClicked={setTokenClicked}
              foodCategories={foodCategories}
            />
           
    </div>
  )
}

export default Body;

const MainContents =({foodCategories,sideBarCliked,setSideBarClicked,cartclicked,setCartClicked,tokenClicked,setTokenClicked})=>{
  return(
    <Base

    sideBarCliked={sideBarCliked}
    setSideBarClicked={setSideBarClicked}
    cartclicked={cartclicked}
    setCartClicked={setCartClicked}
    tokenClicked={tokenClicked}
    setTokenClicked={setTokenClicked}
    >
    {
      sideBarCliked &&
     <CustomerSidebar
     foodCategories={foodCategories}
     />
    
    }
    {
      tokenClicked && <FoodToken/>
      
    }
    {
      cartclicked && <AddtoCart/>
    }
    
      
    </Base>
  )
}