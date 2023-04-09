import React from 'react'
import { useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import {decodeToken} from 'react-jwt'
import Base from '../../BASE/Base'
import CustomerSidebar from '../Sidebar/Sidebar'
import { useState } from 'react';
import FoodToken from '../FoodToken/Food'
import AddtoCart from '../Cart/AddtoCart'
import Food from '../Foods list/food'
import './body.css'



const Body = () => {
  const [sideBarCliked,setSideBarClicked]=useState(false)
  const [cartclicked,setCartClicked] = useState(false);
  const [tokenClicked,setTokenClicked] = useState(false);
  const [foodList,setFoodList] = useState([])
  const [foodTokenlist, setFoodTokenlist] = useState([])
  const [cartlist,setCartlist] = useState([])
 const history = useHistory();



    useEffect(()=>{

      
        const customerToken = localStorage.getItem("customertoken")
        if(!customerToken) return history.replace("/customersignin")

        const customer = decodeToken(customerToken);
        if(!customer){
          localStorage.removeItem(customerToken)
            history.push("/customersignin")
        }


        const getfoodList = async()=>{

          try {
      
              const response = await fetch("https://food-token-generator-backend.vercel.app/customer/food",{
                  method:"GET",
                  headers:{
                      "x-auth-customertoken":localStorage.getItem("customertoken")
      
                  }
              })
      
              const data = await response.json()
              setFoodList(data)
              
              
          } catch (error) {
              console.log("get food error",error)
          }
      }

      const token = async () => {
        const response = await fetch("https://food-token-generator-backend.vercel.app/token", {
          method: "GET",
          headers: {
            "x-auth-customertoken": localStorage.getItem("customertoken")
          }
        })
  
        const data = await response.json()
  
        setFoodTokenlist(data)
      }

      const cart = async () => {
        const response = await fetch("https://food-token-generator-backend.vercel.app/cart", {
          method: "GET",
          headers: {
            "x-auth-customertoken": localStorage.getItem("customertoken")
          }
        })
  
        const data = await response.json()
  
        setCartlist(data)
      }

      cart()

      token()
     
      getfoodList()
  

    },[])
    

  return (
    <div className='body'>
       
            <MainContents

              sideBarCliked={sideBarCliked}
              setSideBarClicked={setSideBarClicked}
              cartclicked={cartclicked}
              setCartClicked={setCartClicked}
              tokenClicked={tokenClicked}
              setTokenClicked={setTokenClicked}
              foodList={foodList}
              setFoodList={setFoodList}
              foodTokenlist={foodTokenlist}
              setFoodTokenlist={setFoodTokenlist}
              cartlist={cartlist}
              setCartlist={setCartlist}
            />
           
    </div>
  )
}

export default Body;

const MainContents = ({cartlist,setCartlist,foodTokenlist,setFoodTokenlist,foodList,setFoodList,sideBarCliked,setSideBarClicked,cartclicked,setCartClicked,tokenClicked,setTokenClicked})=>{
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
     foodList={foodList}
     />
    
    }
    {
      tokenClicked && <FoodToken
      
      foodTokenlist={foodTokenlist}
              setFoodTokenlist={setFoodTokenlist}
      />
      
    }
    {
      cartclicked && <AddtoCart
      cartlist={cartlist}
              setCartlist={setCartlist}
              setSideBarClicked={setSideBarClicked}
              setCartClicked={setCartClicked}
              setTokenClicked={setTokenClicked}
              setFoodTokenlist={setFoodTokenlist}
              foodTokenlist={foodTokenlist}
      />
    }
    
    <Food
        foodList={foodList}
    setFoodList={setFoodList}
    
    />
      
    </Base>
  )
}