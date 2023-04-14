import  React, { useState } from 'react';
import './Customer.css'
import { DataGrid } from '@mui/x-data-grid';

const Customer = ({customersData, setCustomerData}) => {
    const[count,setount] = useState(1)

const columns = [
    {
        field:"name",headerName:"NAME",width:200
     },
     {
        field:"email",headerName:"EMAIL",width:200
     }

]

const rows = customersData;


  return (
    <div className="customersDiv">
        <div style={{ height: "70vh", width: 'calc(300px + 30vw)' }}>
      <DataGrid
      getRowId={(row) => row._id}
        rows={rows}
        columns={columns}
      />
    </div>
    </div>
  )
}

export default Customer