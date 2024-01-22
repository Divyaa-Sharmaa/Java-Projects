import React from 'react'
import atm_1 from '../Images/atm.jpg';
import '../index.css';
import { Link } from 'react-router-dom';

export default function FastCash() {
    let parentStyle = {
        marginTop: "15px",
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap"
      };
    
      let childStyle = {
        width: "50%",
        margin: "0 auto",
        textDecoration: 'none',
        display: "flex",
        alignItems: "center"
      };
    
    
      return (
    
        <div className='image-container'>
          {/* <input type='button' name='fastCash' className='input'/> style={{ textDecoration: 'none' }}*/}
          <div className='image-wrapper col-md-5' style={parentStyle}>
            {/* <div style={childStyle}> */}
            <img src={atm_1} className='image img-fluid' alt="Bank" />
            {/* </div> */}
            <h6 className='image-text'>SELECT WITHDRAWL AMOUNT</h6>
            <div style={{ ...childStyle, justifyContent: "flex-end" }}>
              <Link className='login-btn btnn' target="_blank">Rs.1000</Link>
              <Link to={"/Deposit"} className='login-btn btn_1'>Rs.10000</Link>
              <Link to={"/Withdraw"} className='login-btn btn_2'>Rs.100</Link>
              <Link to={"/Login"}  className='login-btn btn_3'>Back</Link>
              <Link className='login-btn btn_4'>Rs.2000</Link>
              <Link className='login-btn btn_5'>Rs.500</Link>
              <Link className='login-btn btn_6'>Rs.5000</Link>
            </div>
          </div>
        </div>
      )
}
