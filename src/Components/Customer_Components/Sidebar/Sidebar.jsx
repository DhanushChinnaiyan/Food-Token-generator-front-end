import React from 'react'
import './Sidebar.css'
import {Link} from 'react-scroll'


const CustomerSidebar = () => {






    return (
        <div className='customersidebarMainDiv'>
            <div className="customername">
                Welcome {localStorage.getItem("CustomerName")}
            </div>
            <div className="foodDiv">
                <div className="foodTittle">
                    CATEGORIES
                </div>
                <div className="categories">
                    <ul style={{listStyle:"none"}}>
                        <Link spy={true} to="biriyani" smooth={true} activeClass="activclass">
                            <li>BIRIYANI</li>
                        </Link>

                        <Link spy={true} to="biriyani" smooth={true} activeClass="activclass">
                            <li>BURGER</li>
                        </Link>
                        <Link spy={true} to="biriyani" smooth={true} activeClass="activclass">
                            <li>SHAWARMA</li>
                        </Link>
                        <Link spy={true} to="biriyani" smooth={true} activeClass="activclass">
                            <li>NOODLES</li>
                        </Link>



                    </ul>
                    <div>We will add more categories soon</div>
                </div>
            </div>

        </div>
    )
}

export default CustomerSidebar