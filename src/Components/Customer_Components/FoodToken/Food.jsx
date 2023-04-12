import React from 'react'
import './Food.css'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

const FoodToken = ({foodTokenlist,setFoodTokenlist,setTokenClicked}) => {

 
if(foodTokenlist.length === 0) {
  setTokenClicked(false)
}


  const handleClick = async(id) => {
    
    try {

      const response = await fetch(`https://food-token-generator-backend.vercel.app/token/${id}`,{
        method:"DELETE",
        headers:{
          "x-auth-customertoken": localStorage.getItem("customertoken")
        }
      });

      const data =response.json();

      const selectToken = foodTokenlist.filter((element)=>element._id !== id)
      setFoodTokenlist(selectToken)
      
    } catch (error) {
      console.log("delete token error" , error)
    }
  }


  return (
    <div className='customerFoodToken'>

      <div className="tokenTittle">
        TOKEN :
      </div>
      <div style={{textAlign:"center"}}>Present the token when the owner delivers food to your home</div>
      <div className="tokenDiv">
        {
          foodTokenlist.map((element, index) => {
            return (
              <Card key={index} className="tokenCart" style={{boxShadow:"inset 0 0 calc(10px + 2vw) rgb(122, 195, 251)",borderRadius:"calc(5px + 1vw)"}}>
               
               <CardMedia   
                    sx={{height:"calc(70px + 4vw)",borderRadius:"calc(10px + 0.5vw) calc(10px + 0.5vw) 0 0"}}
                    image={element.foodImage}
                    tittle = "nothing"
                    />
               
                <CardContent>

                  <Typography gutterBottom component="div">
                <span>{element.foodName}</span>
                  </Typography>
                  <Typography gutterBottom  component="div">
                  <span>Total food ordered:</span> <span>{element.noOfFood}</span>
                  </Typography>
                  <Typography gutterBottom component="div">
                <span>Total Price:{element.foodPrice} .RS</span>
                  </Typography>
                  <Typography gutterBottom  component="div">
                  <span>Token:</span> <span>{element._id}</span>
                  </Typography>
                  
                  <div><Button onClick={()=>handleClick(element._id)} size="small" variant='contained' color='error' style={{fontSize:"calc(8px + 0.1vw)",fontWeight:"bold"}}>Cancel Order</Button></div>
                  </CardContent>
              </Card>
            )
          })
        }
      </div>
    </div>
  )
}

export default FoodToken