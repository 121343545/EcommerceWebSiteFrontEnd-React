import React, { useEffect } from 'react'
import Slider from './Slider.js'
import "./dashboard.css"
import { getAdminProduct } from "../../actions/productAction";
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { Doughnut,Line } from 'react-chartjs-2'
import { useDispatch, useSelector } from 'react-redux';
const Dashboard = () => {


  const dispatch =useDispatch();
  
  const { products } = useSelector((state) => state.products);

  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    lineState: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: ["tomato"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0, 4000],
      },
    ],
  };
  useEffect(() => {
    dispatch(getAdminProduct());
   
  }, [dispatch]);



  return (
    <div className='dashboard'>
    <Slider/>
    <div className='dashboardContainer'>
      <Typography component="h1">Dashboard</Typography>
      <div className='dashboardSummary'>
        <div>
          <p>
            Total Amount <br/> rs2000
          </p>
        </div>
        <div className='dashboardSummaryBox2'>
            <Link to="/admin/products">
              <p>Product</p>
              <p>{products && products.length}</p>
            </Link>
            <Link to="/admin/products">
              <p>Orders</p>
              <p>80</p>
            </Link>
            <Link to="/admin/users">
              <p>Users</p>
              <p>2</p>
            </Link>
        </div>
      </div>
      
      <div className="lineChart">
         
        </div>

    </div>
    </div>
  )
}

export default Dashboard
