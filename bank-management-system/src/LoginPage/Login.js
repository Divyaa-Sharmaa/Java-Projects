import React from 'react'
import atm_1 from '../Images/atm.jpg';
import '../index.css';
import { Link } from 'react-router-dom';
// import Deposit from '../Frames/Deposit';

export default function Login() {

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
        <h6 className='image-text'>Select your transactions</h6>
        <div style={{ ...childStyle, justifyContent: "flex-end" }}>
          <Link className='login-btn btnn' target="_blank">Statement</Link>
          <Link to={"/Deposit"} className='login-btn btn_1'>Deposit</Link>
          <Link className='login-btn btn_2'>Cash withdrawl</Link>
          <Link className='login-btn btn_3'>Balance Enquiry</Link>
          <Link className='login-btn btn_4'>Fast Cash</Link>
          <Link className='login-btn btn_5'>Pin Change</Link>
          <Link className='login-btn btn_6'>Exit</Link>
        </div>
      </div>
    </div>
  )
}
