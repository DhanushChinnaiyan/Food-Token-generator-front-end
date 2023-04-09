import React from 'react'
import './food.css'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';


const Food = ({ foodList, setFoodList }) => {
    return (
        <div className="body">
            <Biriyani
                foodList={foodList}
            />
            <Burger
                foodList={foodList}
            />
            <Shawarma
                foodList={foodList}
            />
            <Noodles
                foodList={foodList}
            />
        </div>
    )
}

export default Food


const Biriyani = ({ foodList }) => {

    const addCart = () => {

    }


    return (
        <div className="foodDiv">
            <div id='biriyani' className="foodHeading">BIRIYANI</div>
            <div className="foods">


                {
                    foodList.map((element, index) => {
                        return (
                         element.foodCategory === "biriyani" &&  <Card key={index} className="tokenCart" style={{ boxShadow: "inset 0 0 calc(10px + 2vw) rgb(122, 195, 251)", borderRadius: "calc(5px + 1vw)" }}>

                                <CardMedia
                                    sx={{ height: "calc(80px + 7vw)" }}
                                    image={element.foodImage}
                                    tittle="nothing"
                                />

                                <CardContent>

                                    <Typography gutterBottom component="div">
                                        <span>{element.foodName}</span>
                                    </Typography>
                                    <Typography gutterBottom component="div">
                                        <span>Price :</span> <span>{element.foodPrice}</span>
                                    </Typography>

                                    <div><Button style={{ position: "inherit" }} onClick={() => addCart(element._id)} size="small">AddTo Order</Button></div>
                                </CardContent>
                            </Card>
                        )
                    })
                }

            </div>
        </div>
    )
}



const Burger = ({ foodList }) => {

    const addCart = () => {

    }


    return (
        <div className="foodDiv">
            <div id='burger' className="foodHeading">BURGER</div>
            <div className="foods">


                {
                    foodList.map((element, index) => {
                        return (
                         element.foodCategory === "burger" &&  <Card key={index} className="tokenCart" style={{ boxShadow: "inset 0 0 calc(10px + 2vw) rgb(122, 195, 251)", borderRadius: "calc(5px + 1vw)" }}>

                                <CardMedia
                                    sx={{ height: "calc(80px + 7vw)" }}
                                    image={element.foodImage}
                                    tittle="nothing"
                                />

                                <CardContent>

                                    <Typography gutterBottom component="div">
                                        <span>{element.foodName}</span>
                                    </Typography>
                                    <Typography gutterBottom component="div">
                                        <span>Price :</span> <span>{element.foodPrice}</span>
                                    </Typography>

                                    <div><Button style={{ position: "inherit" }} onClick={() => addCart(element._id)} size="small">AddTo Order</Button></div>
                                </CardContent>
                            </Card>
                        )
                    })
                }

            </div>
        </div>
    )
}



const Shawarma = ({ foodList }) => {

    const addCart = () => {

    }


    return (
        <div className="foodDiv">
            <div id='shawarma' className="foodHeading">SHAWARMA</div>
            <div className="foods">


                {
                    foodList.map((element, index) => {
                        return (
                         element.foodCategory === "shawarma" &&  <Card key={index} className="tokenCart" style={{ boxShadow: "inset 0 0 calc(10px + 2vw) rgb(122, 195, 251)", borderRadius: "calc(5px + 1vw)" }}>

                                <CardMedia
                                    sx={{ height: "calc(80px + 7vw)" }}
                                    image={element.foodImage}
                                    tittle="nothing"
                                />

                                <CardContent>

                                    <Typography gutterBottom component="div">
                                        <span>{element.foodName}</span>
                                    </Typography>
                                    <Typography gutterBottom component="div">
                                        <span>Price :</span> <span>{element.foodPrice}</span>
                                    </Typography>

                                    <div><Button style={{ position: "inherit" }} onClick={() => addCart(element._id)} size="small">AddTo Order</Button></div>
                                </CardContent>
                            </Card>
                        )
                    })
                }

            </div>
        </div>
    )
}



const Noodles = ({ foodList }) => {

    const addCart = () => {

    }


    return (
        <div className="foodDiv">
            <div id='noodles' className="foodHeading">NOODLES</div>
            <div className="foods">


                {
                    foodList.map((element, index) => {
                        return (
                         element.foodCategory === "noodles" &&  <Card key={index} className="tokenCart" style={{ boxShadow: "inset 0 0 calc(10px + 2vw) rgb(122, 195, 251)", borderRadius: "calc(5px + 1vw)" }}>

                                <CardMedia
                                    sx={{ height: "calc(80px + 7vw)" }}
                                    image={element.foodImage}
                                    tittle="nothing"
                                />

                                <CardContent>

                                    <Typography gutterBottom component="div">
                                        <span>{element.foodName}</span>
                                    </Typography>
                                    <Typography gutterBottom component="div">
                                        <span>Price :</span> <span>{element.foodPrice}</span>
                                    </Typography>

                                    <div><Button style={{ position: "inherit" }} onClick={() => addCart(element._id)} size="small">AddTo Order</Button></div>
                                </CardContent>
                            </Card>
                        )
                    })
                }

            </div>
        </div>
    )
}
