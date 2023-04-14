import React from 'react'
import './Sidebar.css'
import { useHistory } from 'react-router-dom'
import { AppBar, Button } from '@mui/material'


const OwnerSidebar = ({ setSideBarClicked }) => {
    const history= useHistory()
    return (
            <AppBar style={{
                 height: "95vh",
                 width: "calc(80px + 5vw)",
                 padding: "calc(10px + 1vw)",
                 overflowY: "auto",
                 display: "flex",
                 flexDirection: "column",
                 gap: "calc(10px + 1vw)",
                 fontWeight: "bold",
                 backgrounColor:" rgb(8, 119, 204)",
                 color: "aliceblue",
                 left:0,
                 top:"7.5vh",
                 position:'fixed'
            }} >
                           <Button  color='inherit' style={{ fontSize: "calc(9px + 0.5vw)", fontWeight: "bold" }} onClick={() => {history.push("/ownerdash");setSideBarClicked(false)}}>INCOME</Button>

   <Button color='inherit' style={{ fontSize: "calc(9px + 0.5vw)", fontWeight: "bold" }}  onClick={() => {history.push("/ownerdash/orders");setSideBarClicked(false)}}>ORDERS</Button>

   <Button color='inherit' style={{ fontSize: "calc(9px + 0.5vw)", fontWeight: "bold" }} onClick={() => {history.push("/ownerdash/foods");setSideBarClicked(false)}}>FOODS</Button>

   <Button color='inherit' style={{ fontSize: "calc(9px + 0.5vw)", fontWeight: "bold" }}  onClick={() => {history.push("/ownerdash/customers");setSideBarClicked(false)}}>CUSTOMERS</Button>

        </AppBar>
    )
}

export default OwnerSidebar