import React, { useState } from 'react'
import './Cart.css'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';


const AddtoCart = ({setFoodTokenlist,foodTokenlist,cartlist,setCartlist,setSideBarClicked,setCartClicked,setTokenClicked}) => {
  const [count,setCount]=useState(1)
  if(cartlist.length === 0) {
    setCartClicked(false)
  }
  const handleClick = async(id) => {
  try {

    const response = await fetch(`https://food-token-generator-backend.vercel.app/cart/delete/${id}`,{
      method:"DELETE",
      headers:{
        "x-auth-customertoken": localStorage.getItem("customertoken")
      }
    });

    const data =response.json();

    const selectaddtocart = cartlist.filter((element)=>element._id !== id)
    setCartlist(selectaddtocart)
    
  } catch (error) {
    console.log("delete addtocart error" , error)
  }
  }

  const increaseproduct = async(id,foodCount) => {
    try {
      setCount(foodCount+1)
      console.log(count)
      
      const response = await fetch(`https://food-token-generator-backend.vercel.app/cart/edit/${id}`,{
        method:"PUT",
        body:JSON.stringify({
          foodCount:count
        }),
        headers:{
          "Content-Type":"application/json",
          "x-auth-customertoken": localStorage.getItem("customertoken"),
          
        }

      })
     console.log(count)
      const data = await response.json();

      if(data){
        const editedCart = cartlist.findIndex((element)=>element._id === id)
        cartlist[editedCart]={foodCount:count}
                                
       setCartlist([...cartlist])
      }
      
    } catch (error) {
      console.log("increament error",error)
    }

  }

  const handleBuy = async(id) =>{
    try {  
      const buyresponse = await fetch(`https://food-token-generator-backend.vercel.app/token/add/${id}`,{
        method:"POST",
         body:JSON.stringify(),
        headers:{
          "Content-Type" : "application/json",
          "x-auth-customertoken": localStorage.getItem("customertoken")
        }
      })
      const tokendata = await buyresponse.json()
      setFoodTokenlist([...foodTokenlist,tokendata])
      const response = await fetch(`https://food-token-generator-backend.vercel.app/cart/delete/${id}`,{
        method:"DELETE",
        headers:{
          "x-auth-customertoken": localStorage.getItem("customertoken")
        }
      });
      const data =response.json();
  
      const selectaddtocart = cartlist.filter((element)=>element._id !== id)
      setCartlist(selectaddtocart)

      setSideBarClicked(false)
      setCartClicked(false)
      setTokenClicked(true)
    } catch (error) {
      console.log("Buy error",error)
    }

  }

  

return (
  <div className='customerCart'>

    <div className="addtocartTittle">
      ADD TO CART :
    </div>
    <div className="addtocartDiv">
      {
        cartlist.map((element, index) => {
          return (
            <Card key={index} className="addtocart" style={{boxShadow:"inset 0 0 calc(10px + 2vw) rgb(122, 195, 251)",borderRadius:"calc(5px + 1vw)"}}>
             
             <CardMedia   
                  sx={{height:"calc(70px + 4vw)",borderRadius:"calc(10px + 0.5vw) calc(10px + 0.5vw) 0 0"}}
                  image={element?.foodImage}
                  tittle = "nothing"
                  />
             
              <CardContent>

                <Typography gutterBottom component="div">
                  <span>{element?.foodName}</span>
                </Typography>
                <Typography gutterBottom  component="div">
               <span>Add More: </span> <span>{element?.foodCount}</span><Button onClick={()=>increaseproduct(element._id,element.foodCount,element.foodImage,element.foodName,element.foodPrice,element.totalFoodPrice)} style={{padding:0,fontSize:"calc(10px + 2vw)"}}>+</Button>
                </Typography>
                <Typography gutterBottom  component="div">
                <span>Price:</span> <span>{element?.totalFoodPrice}.RS</span>
                </Typography>
                <div><Button variant='contained' color='success' style={{fontSize:"calc(8px + 0.1vw)",fontWeight:"bold"}} onClick={()=>handleBuy(element?._id)} size="small">buy now</Button>
                <Button variant='contained' color='error' style={{fontSize:"calc(8px + 0.1vw)",fontWeight:"bold"}}  onClick={()=>handleClick(element?._id)} size="small">Romove cart</Button></div>
                </CardContent>
            </Card>
          )
        })
      }
    </div>
  </div>
)
}

export default AddtoCart