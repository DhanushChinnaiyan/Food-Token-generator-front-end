import React, { useState } from 'react'
import './Food.css'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useFormik } from 'formik';



const Foodlist = ({ ownerFoodsDetails, setOwnerFoodsDetails }) => {
    return (
        <div className="body">
            <Addfood
                ownerFoodsDetails={ownerFoodsDetails}
                setOwnerFoodsDetails={setOwnerFoodsDetails}
            />
            <Biriyani
                ownerFoodsDetails={ownerFoodsDetails}
                setOwnerFoodsDetails={setOwnerFoodsDetails}
            />
            <Burger
                ownerFoodsDetails={ownerFoodsDetails}
                setOwnerFoodsDetails={setOwnerFoodsDetails}
            />
            <Shawarma
                ownerFoodsDetails={ownerFoodsDetails}
                setOwnerFoodsDetails={setOwnerFoodsDetails}
            />
            <Noodles
                ownerFoodsDetails={ownerFoodsDetails}
                setOwnerFoodsDetails={setOwnerFoodsDetails}
            />
        </div>
    )
}

export default Foodlist

const Addfood = ({ ownerFoodsDetails, setOwnerFoodsDetails }) => {

    const { values, handleChange, handleSubmit, handleBlur } = useFormik(
        {
            initialValues: {
                foodImage: "",
                foodCategory: "",
                foodName: "",
                foodPrice: ""
            },
            onSubmit: (newFood) => {
                addFood(newFood)
                values.foodImage = '';
                values.foodCategory = '';
                values.foodName = '';
                values.foodPrice = ''
            },

        }
    )

    const addFood = async (newFood) => {


        try {
            const response = await fetch("https://food-token-generator-backend.vercel.app/owner/addfood", {
                method: "POST",
                body: JSON.stringify(newFood),
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-ownertoken": localStorage.getItem("ownertoken")
                }
            })

            const data = await response.json();

            setOwnerFoodsDetails([...ownerFoodsDetails, data])

        } catch (error) {
            console.log("add food error", error)
        }
    }

    return (
        <div className="fooddiv">
            <form className='addfood' onSubmit={handleSubmit}>
                <TextField
                    required id="outlined-basic"
                    label="IMG URL"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.foodImage}
                    name="foodImage"
                />
                <FormControl required fullWidth>
                    <InputLabel id="demo-simple-select-label">FOOD CATEGORY</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="FOOD CATEGORY"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.foodCategory}
                        name="foodCategory"
                    >
                        <MenuItem value={"biriyani"}>BIRIYANI</MenuItem>
                        <MenuItem value={"burger"}>BURGER</MenuItem>
                        <MenuItem value={"shawarma"}>SHAWARMA</MenuItem>
                        <MenuItem value={"noodles"}>NOODLES</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    required id="outlined-basic"
                    label="FOOD NAME"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.foodName}
                    name="foodName"

                />
                <TextField
                    required
                    id="outlined-basic"
                    label="FOOD PRICE"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.foodPrice}
                    name="foodPrice"
                    type='number'
                />
                <Button color='success' variant="contained" type='submit'>ADD FOOD</Button>
            </form>
        </div>


    )
}


const Biriyani = ({ ownerFoodsDetails, setOwnerFoodsDetails }) => {

    return (
        <div className="foodDiv">
            <div id='biriyani' className="foodHeading">BIRIYANI</div>
            <div className="foods">


                {
                    ownerFoodsDetails.map((element, index) => {
                        return (
                            element.foodCategory === "biriyani" &&
                            <FoodCard
                                key={index}
                                foodImage={element.foodImage}
                                foodName={element.foodName}
                                foodPrice={element.foodPrice}
                                id={element._id}
                                ownerFoodsDetails={ownerFoodsDetails}
                                setOwnerFoodsDetails={setOwnerFoodsDetails}
                            />
                        )
                    })
                }

            </div>
        </div>
    )
}



const Burger = ({ ownerFoodsDetails, setOwnerFoodsDetails }) => {

    return (
        <div className="foodDiv">
            <div id='burger' className="foodHeading">BURGER</div>
            <div className="foods">


                {
                    ownerFoodsDetails.map((element, index) => {
                        return (
                            element.foodCategory === "burger" &&
                            <FoodCard
                                key={index}
                                foodImage={element.foodImage}
                                foodName={element.foodName}
                                foodPrice={element.foodPrice}
                                id={element._id}
                                ownerFoodsDetails={ownerFoodsDetails}
                                setOwnerFoodsDetails={setOwnerFoodsDetails}
                            />
                        )
                    })
                }

            </div>
        </div>
    )
}



const Shawarma = ({ ownerFoodsDetails, setOwnerFoodsDetails }) => {

    return (
        <div className="foodDiv">
            <div id='shawarma' className="foodHeading">SHAWARMA</div>
            <div className="foods">


                {
                    ownerFoodsDetails.map((element, index) => {
                        return (
                            element.foodCategory === "shawarma" &&
                            <FoodCard
                                key={index}
                                foodImage={element.foodImage}
                                foodName={element.foodName}
                                foodPrice={element.foodPrice}
                                id={element._id}
                                ownerFoodsDetails={ownerFoodsDetails}
                                setOwnerFoodsDetails={setOwnerFoodsDetails}
                            />
                        )
                    })
                }

            </div>
        </div>
    )
}



const Noodles = ({ ownerFoodsDetails, setOwnerFoodsDetails }) => {

    return (
        <div className="foodDiv">
            <div id='noodles' className="foodHeading">NOODLES</div>
            <div className="foods">


                {
                    ownerFoodsDetails.map((element, index) => {
                        return (
                            element.foodCategory === "noodles" &&
                            <FoodCard
                                key={index}
                                foodImage={element.foodImage}
                                foodName={element.foodName}
                                foodPrice={element.foodPrice}
                                id={element._id}
                                ownerFoodsDetails={ownerFoodsDetails}
                                setOwnerFoodsDetails={setOwnerFoodsDetails}
                            />
                        )
                    })
                }

            </div>
        </div>
    )
}


const FoodCard = ({ ownerFoodsDetails, setOwnerFoodsDetails, foodImage, foodName, foodPrice, id }) => {
    const [edit, setEdit] = useState(false)



    const deleteFood = async (id) => {


        try {

            const response = await fetch(`https://food-token-generator-backend.vercel.app/owner/delete/${id}`, {
                method: "DELETE",
                headers: {
                    "x-auth-ownertoken": localStorage.getItem("ownertoken")
                }
            })

            await response.json()
            const foodSelection = ownerFoodsDetails.filter((element) => element._id !== id)

            setOwnerFoodsDetails(foodSelection)

        } catch (error) {
            console.log("food delete error ", error)
        }
    }

    return (
        <div>
            {edit ?
                <EditComponent
                    id={id}
                    ownerFoodsDetails={ownerFoodsDetails}
                    setOwnerFoodsDetails={setOwnerFoodsDetails}
                    setEdit={setEdit}
                />
                :
                <FoodsCard
                    foodImage={foodImage}
                    foodName={foodName}
                    foodPrice={foodPrice}
                    id={id}
                    deleteFood={deleteFood}
                    setEdit={setEdit}
                />
            }
        </div>

    )
}

const FoodsCard = ({ foodImage, foodName, foodPrice, id, deleteFood, setEdit }) => {
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


                <div><Button variant='contained' color='success' style={{ fontSize: "calc(8px + 0.1vw)", fontWeight: "bold", position: "inherit" }} onClick={() => setEdit(true)} size="small">Edit food</Button></div>

                <div style={{ textAlign: "center" }}><Button variant='contained' color='error' style={{ fontSize: "calc(8px + 0.1vw)", fontWeight: "bold", position: "inherit" }} onClick={() => { deleteFood(id) }} size="small">Delete</Button></div>

            </CardContent>
        </Card>
    )
}

const EditComponent = ({ ownerFoodsDetails, setOwnerFoodsDetails, id, setEdit }) => {
    const foodS = ownerFoodsDetails.findIndex((element) => element._id === id);
    const findedFood = ownerFoodsDetails[foodS]

    const { values, handleChange, handleSubmit, handleBlur } = useFormik(
        {
            initialValues: {
                foodImage: findedFood.foodImage,
                foodCategory: findedFood.foodCategory,
                foodName: findedFood.foodName,
                foodPrice: findedFood.foodPrice
            },
            onSubmit: (editedFood) => {
                editFood(editedFood)

            },

        }
    )
    const editFood = async (editedFood) => {


        try {

            const response = await fetch(`https://food-token-generator-backend.vercel.app/owner/edit/${id}`, {
                method: "PUT",
                body: JSON.stringify(editedFood),
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-ownertoken": localStorage.getItem("ownertoken")
                }
            })

            await response.json()
            const foodSelection = ownerFoodsDetails.findIndex((element) => element._id === id)
            ownerFoodsDetails[foodSelection] = editedFood
            setOwnerFoodsDetails([...ownerFoodsDetails])
            setEdit(false)
        } catch (error) {
            console.log("food delete error ", error)
        }
    }
    return (
        <div className="fooddiv">
            <form className='addfood' onSubmit={handleSubmit}>
                <TextField
                    required id="outlined-basic"
                    label="IMG URL"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.foodImage}
                    name="foodImage"
                />
                <FormControl required fullWidth>
                    <InputLabel id="demo-simple-select-label">FOOD CATEGORY</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="FOOD CATEGORY"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.foodCategory}
                        name="foodCategory"
                    >
                        <MenuItem value={"biriyani"}>BIRIYANI</MenuItem>
                        <MenuItem value={"burger"}>BURGER</MenuItem>
                        <MenuItem value={"shawarma"}>SHAWARMA</MenuItem>
                        <MenuItem value={"noodles"}>NOODLES</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    required id="outlined-basic"
                    label="FOOD NAME"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.foodName}
                    name="foodName"

                />
                <TextField
                    required
                    id="outlined-basic"
                    label="FOOD PRICE"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.foodPrice}
                    name="foodPrice"
                    type='number'
                />
                <Button variant="contained" color='success' type='submit' >UPDATE FOOD</Button>
                <Button variant="contained" color='error' onClick={() => setEdit(false)} >calcel</Button>
            </form>
        </div>
    )
}
