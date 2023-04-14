import React from 'react';
import { AppBar, Button, Toolbar } from '@mui/material'
import { useHistory } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi'
import OwnerSidebar from '../Sidebar/Sidebar';




const Base = ({children,setSideBarClicked,sideBarCliked}) => {
   
    const history = useHistory()


    const logout = () => {
        localStorage.removeItem("ownertoken")
        localStorage.removeItem("OwnerName")
        history.replace("/")
    }

    const menuIcon =() => {
       setSideBarClicked(!sideBarCliked)

    }
   


    return (
        <div>


            <AppBar position='fixed'>
                <Toolbar style={{ display: "flex" }} variant='dense'>
                    <div style={{ flex: 1 }}>
                        <GiHamburgerMenu onClick={menuIcon} size="calc(15px + 1vw)" style={{ cursor: "pointer" }} />
                    </div>

                    <div style={{ flex: 2,textAlign:"center" }}>
                        WELCOME {localStorage.getItem("OwnerName").toUpperCase()}
                    </div>
                    <div style={{ flex: 1, display: 'flex', justifyContent: "flex-end" ,gap:"calc(5px + 1vw)"}}>

                        <Button color='inherit' style={{ fontSize: "calc(9px + 0.5vw)", fontWeight: "bold" }}
                            onClick={logout}
                        >

                            <div>LOGOUT</div>

                        </Button>
                    </div>

                </Toolbar>
            </AppBar>

            {
      sideBarCliked && <OwnerSidebar
      setSideBarClicked={setSideBarClicked}
      />
     }

            <div style={{marginTop:"7.8vh"}}>
                {children}
            </div>

        </div>

    )
}

export default Base;
