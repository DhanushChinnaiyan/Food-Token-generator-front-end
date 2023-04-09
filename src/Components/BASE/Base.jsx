import React from 'react';
import { AppBar, Button, Toolbar } from '@mui/material'
import { useHistory } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi'




const Base = ({children,sideBarCliked,setSideBarClicked,cartclicked,setCartClicked,tokenClicked,setTokenClicked}) => {
   
    const history = useHistory()
    const logout = () => {
        localStorage.removeItem("customertoken")
        history.replace("/customersignin")
    }

    const menuIcon =() => {
       setSideBarClicked(!sideBarCliked)
       console.log(sideBarCliked)
       setCartClicked(false)
       setTokenClicked(false)

    }
    const cart =() => {
        setCartClicked(!cartclicked)
        console.log(cartclicked)
        setSideBarClicked(false)
        setTokenClicked(false)
     }
     const token =() => {
        setTokenClicked(!tokenClicked)
        console.log(tokenClicked)
        setCartClicked(false)
        setSideBarClicked(false)
     }


    return (
        <div>


            <AppBar position='static'>
                <Toolbar style={{ display: "flex" }} variant='dense'>
                    <div style={{ flex: 1 }}>
                        <GiHamburgerMenu onClick={menuIcon} size="calc(15px + 1vw)" style={{ cursor: "pointer" }} />
                    </div>

                    <div style={{ flex: 3, display: 'flex', justifyContent: "flex-end" ,gap:"calc(5px + 1vw)"}}>


                        <Button color='inherit' style={{ fontSize: "calc(9px + 0.5vw)", fontWeight: "bold" }}
                            onClick={token}
                        >

                            <div>Food Token</div>

                        </Button>




                        <Button color='inherit' style={{ fontSize: "calc(9px + 0.5vw)", fontWeight: "bold" }}
                            onClick={cart}
                        >

                            <div>My Cart</div>

                        </Button>




                        <Button color='inherit' style={{ fontSize: "calc(9px + 0.5vw)", fontWeight: "bold" }}
                            onClick={logout}
                        >

                            <div>LOGOUT</div>

                        </Button>
                    </div>

                </Toolbar>
            </AppBar>


            <div>
                {children}
            </div>

        </div>

    )
}

export default Base;
