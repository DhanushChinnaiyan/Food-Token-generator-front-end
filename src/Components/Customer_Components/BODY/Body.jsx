import React from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { decodeToken } from 'react-jwt'
import Base from '../BASE/Base'
import CustomerSidebar from '../Sidebar/Sidebar'
import { useState } from 'react';
import FoodToken from '../FoodToken/Food'
import AddtoCart from '../Cart/AddtoCart'
import Food from '../Foods list/food'
import './body.css'
import { Box, CircularProgress } from '@mui/material'



const Body = () => {
  const [loading, setLoading] = useState(true)
  const [sideBarCliked, setSideBarClicked] = useState(false)
  const [cartclicked, setCartClicked] = useState(false);
  const [tokenClicked, setTokenClicked] = useState(false);
  const [foodList, setFoodList] = useState([])
  const [foodTokenlist, setFoodTokenlist] = useState([])
  const [cartlist, setCartlist] = useState([])
  const history = useHistory();



  useEffect(() => {


    const customerToken = localStorage.getItem("customertoken")
    if (!customerToken) return history.replace("/")

    const customer = decodeToken(customerToken);
    if (!customer) {
      localStorage.removeItem("customertoken")
      history.push("/")
    }



    const token = async () => {
      try {
   
        const response = await fetch("https://food-token-generator-backend.vercel.app/token", {
        method: "GET",
        headers: {
          "x-auth-customertoken": localStorage.getItem("customertoken")
        }
      })

      const data = await response.json()

      setFoodTokenlist(data)

        
      } catch (error) {
        console.log("token error", error)
      }
    }

    const cart = async () => {
      try {

        const response = await fetch("https://food-token-generator-backend.vercel.app/cart", {
        method: "GET",
        headers: {
          "x-auth-customertoken": localStorage.getItem("customertoken")
        }
      })

      const data = await response.json()

      setCartlist(data)

        
      } catch (error) {
        console.log("cart error",error)
      }
    }

    const getfoodList = async () => {

      try {

        const response = await fetch("https://food-token-generator-backend.vercel.app/customer/food", {
          method: "GET",
          headers: {
            "x-auth-customertoken": localStorage.getItem("customertoken")

          }
        })

        const data = await response.json()
        setFoodList(data)
        setLoading(false)

      } catch (error) {
        console.log("food error", error)
      }
    }

    cart()

    token()

    getfoodList()


  }, [cartclicked, tokenClicked, history])


  return (
    <div className='body'>
      {loading ?
        <Box sx={{ display: 'flex', justifyContent: "center",height:"50vh",alignItems:"center" }}>
          <CircularProgress color="primary" size="40px" />
        </Box>
        :
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
      }
    </div>
  )
}

export default Body;

const MainContents = ({ cartlist, setCartlist, foodTokenlist, setFoodTokenlist, foodList, setFoodList, sideBarCliked, setSideBarClicked, cartclicked, setCartClicked, tokenClicked, setTokenClicked }) => {
  return (
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
          setSideBarClicked={setSideBarClicked}
        />

      }
      {
        tokenClicked && <FoodToken

          foodTokenlist={foodTokenlist}
          setFoodTokenlist={setFoodTokenlist}
          setTokenClicked={setTokenClicked}
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
        cartlist={cartlist}
        setCartlist={setCartlist}
        setCartClicked={setCartClicked}
        cartclicked={cartclicked}
      />

    </Base>
  )
}