import React from 'react'
import atm_1 from '../Images/atm.jpg';
import '../index.css';
import { Link } from 'react-router-dom';

export default function ChangePin() {
    let childStyle = {
        textDecoration: 'none',
        display: "flex",
        alignItems: "center"
      };
    

    return (
        <div className='image-container'>
            <div className='image-wrapper col-md-5'>
                <img src={atm_1} className='image img-fluid' alt="Bank" />
                <h6 className='image-text'>CHANGE YOUR PIN</h6>
                <div style={{ ...childStyle, justifyContent: "flex-end" }}>
                    <label htmlFor='number' className='image-text'/>
                    <input type='password' id='number' className='btn_31' placeholder='New Pin:'/>
                    {/* <label htmlFor='num' className='image-text'/>*/}
                    <input type='password' id='num' className='btn_pin' placeholder='Re-enter New Pin:'/> 
                    <Link className='login-btn btn1'>Change</Link>
                    <Link className='login-btn btn_32' to={"/Login"}>Back</Link>
                </div>
            </div>
        </div>
    )
}
