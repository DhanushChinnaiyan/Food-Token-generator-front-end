import React, { useState } from 'react'
import './food.css'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';


const Food = ({ foodList, cartclicked, setCartClicked, cartlist, setCartlist }) => {
    return (
        <div className="body">
            <Biriyani
                foodList={foodList}
                cartclicked={cartclicked}
                setCartClicked={setCartClicked}
                setCartlist={setCartlist}
                cartlist={cartlist}
            />
            <Burger
                foodList={foodList}
                cartclicked={cartclicked}
                setCartClicked={setCartClicked}
                setCartlist={setCartlist}
                cartlist={cartlist}
            />
            <Shawarma
                foodList={foodList}
                cartclicked={cartclicked}
                setCartClicked={setCartClicked}
                setCartlist={setCartlist}
                cartlist={cartlist}
            />
            <Noodles
                foodList={foodList}
                cartclicked={cartclicked}
                setCartClicked={setCartClicked}
                setCartlist={setCartlist}
                cartlist={cartlist}
            />
        </div>
    )
}

export default Food


const Biriyani = ({ foodList, cartclicked, setCartClicked, setCartlist, cartlist }) => {

    return (
        <div className="foodDiv">
            <div id='biriyani' className="foodHeading">BIRIYANI</div>
            <div className="foods">


                {
                    foodList.map((element, index) => {
                        return (
                            element.foodCategory === "biriyani" &&
                            <FoodCard
                                key={index}
                                setCartlist={setCartlist}
                                setCartClicked={setCartClicked}
                                foodImage={element.foodImage}
                                foodName={element.foodName}
                                foodPrice={element.foodPrice}
                                cartclicked={cartclicked}
                                id={element._id}
                                cartlist={cartlist}
                            />
                        )
                    })
                }

            </div>
        </div>
    )
}



const Burger = ({ foodList, cartclicked, setCartClicked, setCartlist, cartlist }) => {

    return (
        <div className="foodDiv">
            <div id='burger' className="foodHeading">BURGER</div>
            <div className="foods">


                {
                    foodList.map((element, index) => {
                        return (
                            element.foodCategory === "burger" &&
                            <FoodCard
                                key={index}
                                setCartlist={setCartlist}
                                setCartClicked={setCartClicked}
                                foodImage={element.foodImage}
                                foodName={element.foodName}
                                foodPrice={element.foodPrice}
                                cartclicked={cartclicked}
                                id={element._id}
                                cartlist={cartlist}
                            />
                        )
                    })
                }

            </div>
        </div>
    )
}



const Shawarma = ({ foodList, cartclicked, setCartClicked, setCartlist, cartlist }) => {

    return (
        <div className="foodDiv">
            <div id='shawarma' className="foodHeading">SHAWARMA</div>
            <div className="foods">


                {
                    foodList.map((element, index) => {
                        return (
                            element.foodCategory === "shawarma" &&
                            <FoodCard
                                key={index}
                                setCartlist={setCartlist}
                                setCartClicked={setCartClicked}
                                foodImage={element.foodImage}
                                foodName={element.foodName}
                                foodPrice={element.foodPrice}
                                cartclicked={cartclicked}
                                id={element._id}
                                cartlist={cartlist}
                            />
                        )
                    })
                }

            </div>
        </div>
    )
}



const Noodles = ({ foodList, cartclicked, setCartClicked, setCartlist, cartlist }) => {

    return (
        <div className="foodDiv">
            <div id='noodles' className="foodHeading">NOODLES</div>
            <div className="foods">


                {
                    foodList.map((element, index) => {
                        return (
                            element.foodCategory === "noodles" &&
                            <FoodCard
                                key={index}
                                setCartlist={setCartlist}
                                setCartClicked={setCartClicked}
                                foodImage={element.foodImage}
                                foodName={element.foodName}
                                foodPrice={element.foodPrice}
                                cartclicked={cartclicked}
                                id={element._id}
                                cartlist={cartlist}
                            />
                        )
                    })
                }

            </div>
        </div>
    )
}


const FoodCard = ({ cartlist, setCartlist, setCartClicked, foodImage, foodName, foodPrice, cartclicked, id }) => {

    const [cart, setCart] = useState(true)

    const addCart = async (id) => {
        try {


            const response = await fetch(`https://food-token-generator-backend.vercel.app/cart/add/${id}`, {
                method: "POST",
                body: JSON.stringify(),
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-customertoken": localStorage.getItem("customertoken")
                }
            })

            const data = response.json();
            setCartlist([...cartlist, data])
            setCartClicked(true)
            setCart(false)


        } catch (error) {
            console.log("add to cart post error ", error)
        }

    }


    const removeCart = async (id) => {

        setCart(true)
        const findCart = cartlist.filter((element) => element.foodId === id)
        console.log(findCart[0]._id)
        try {

            const response = await fetch(`https://food-token-generator-backend.vercel.app/cart/delete/${findCart[0]._id}`, {
                method: "DELETE",
                headers: {
                    "x-auth-customertoken": localStorage.getItem("customertoken")
                }
            });

            const data = response.json();

            if (data) {
                const selectaddtocart = cartlist.filter((element) => element._id !== findCart[0]._id)
                setCartlist(selectaddtocart)

            }

        } catch (error) {
            console.log("delete addtocart error", error)
        }
    }


    return (
        <Card className="foodCart" style={{ boxShadow: "inset 0 0 calc(10px + 2vw) rgb(122, 195, 251)", borderRadius: "calc(5px + 0.1vw)" }}>

            <CardMedia
                sx={{ height: "calc(70px + 4vw)" }}
                image={foodImage}
                tittle="nothing"
            />

            <CardContent>

                <Typography gutterBottom component="div">
                    <span>{foodName}</span>
                </Typography>
                <Typography gutterBottom component="div">
                    <span>Price :</span> <span>{foodPrice} .RS</span>
                </Typography>

                {cart ?
                    <div><Button variant='contained' color='success' style={{ fontSize: "calc(8px + 0.1vw)", fontWeight: "bold", position: "inherit" }} onClick={() => { cartclicked === false && addCart(id) }} size="small">AddTo Cart</Button></div>
                    :
                    <div><Button variant='contained' color='error' style={{ fontSize: "calc(8px + 0.1vw)", fontWeight: "bold", position: "inherit" }} onClick={() => { cartclicked === false && removeCart(id) }} size="small">Remove From Cart</Button></div>
                }
            </CardContent>
        </Card>
    )
}
