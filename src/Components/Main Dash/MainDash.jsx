import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import './MainDash.css'
import { useHistory } from 'react-router-dom'
import { decodeToken } from 'react-jwt'

const MainDash = () => {

    const history = useHistory()

    useEffect(() => {

        // owner verification

        const ownerToken = localStorage.getItem("ownertoken")

        if(ownerToken){
            const owner = decodeToken(ownerToken)

            // iThis is the process after the owner token is verified
           
         
            if(owner) { 
                localStorage.setItem("OwnerName",owner.ownerName)
                history.replace("/ownerdash") 
            }else{
             localStorage.removeItem("ownertoken")
            }
        }



        // customer verification
        const customerToken = localStorage.getItem("customertoken")

        if(customerToken){
            const customer = decodeToken(customerToken);

        // This is the process after the customer token is verified
        if (!customer) {
            localStorage.removeItem("customertoken")
       
        } else {
            history.replace("/customerdash")
        }
    }

    }, [history])
        

    return (
        <div className="maindash">
            <div className="companyName">
                Welcome Food Company
            </div>
            <div className="logindiv">
                <div className="customerdiv">
                    <div>CUSTOMER</div>
                    <Button onClick={() => history.push("/customersignin")} variant='contained' color='primary'>customer signin</Button>
                    <Button onClick={() => history.push("/customersignup")} variant='contained' color='success'>customer signup</Button>

                </div>
                <div className="ownerdiv">
                    <div>OWNER</div>
                    <Button onClick={() => history.push("/ownersignin")} variant='contained' color='primary'>owner signin</Button>
                </div>
            </div>
        </div>
    )
}

export default MainDash