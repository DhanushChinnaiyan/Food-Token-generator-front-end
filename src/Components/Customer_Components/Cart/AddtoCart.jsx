import React, { useState } from 'react'
import './Cart.css'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';


const AddtoCart = ({setFoodTokenlist,foodTokenlist,cartlist,setCartlist,setSideBarClicked,setCartClicked,setTokenClicked}) => {
  const [count,setCount]=useState(1)
  const handleClick = async(id) => {
  try {

    const response = await fetch(`https://food-addtocart-generator-backend.vercel.app/cart/delete/${id}`,{
      method:"DELETE",
      headers:{
        "x-auth-customeraddtocart": localStorage.getItem("customeraddtocart")
      }
    });

    const data =response.json();

    const selectaddtocart = cartlist.filter((element)=>element._id !== id)
    setCartlist(selectaddtocart)
    
  } catch (error) {
    console.log("delete addtocart error" , error)
  }
  }

  const increaseproduct = async(id) => {
    try {
      setCount(count+1)

      const response = await fetch(`https://food-token-generator-backend.vercel.app/cart/edit/${id}`,{
        method:"PUT",
        body:JSON.stringify({
          foodCount:count
        }),
        headers:{
          "Content-Type":"application/json",
          "x-auth-customeraddtocart": localStorage.getItem("customeraddtocart"),
          
        }

      })

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
        headers:{
          "Content-Type" : "application/json",
          "x-auth-customeraddtocart": localStorage.getItem("customeraddtocart")
        }
      })

      const tokendata = await buyresponse.json()
      setFoodTokenlist([...foodTokenlist,tokendata])



      const response = await fetch(`https://food-addtocart-generator-backend.vercel.app/cart/delete/${id}`,{
        method:"DELETE",
        headers:{
          "x-auth-customeraddtocart": localStorage.getItem("customeraddtocart")
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
                  sx={{height:"calc(80px + 7vw)"}}
                  image={element.foodImage}
                  tittle = "nothing"
                  />
             
              <CardContent>

                <Typography gutterBottom component="div">
                  <span>{element.foodName.toUpperCase()}</span>
                </Typography>
                <Typography gutterBottom  component="div">
               <span>Add More :</span> <span>{element.foodCount}</span><Button onClick={()=>increaseproduct(element._id)}>+</Button>
                </Typography>
                <Typography gutterBottom  component="div">
                <span>Price:</span> <span>{element.foodPrice}.RS</span>
                </Typography>
                <div><Button style={{fontSize:"calc(6px + 1vw)"}} onClick={()=>handleBuy(element._id)} size="small">buy now</Button>
                <Button style={{fontSize:"calc(6px + 1vw)"}}  onClick={()=>handleClick(element._id)} size="small">Romove cart</Button></div>
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