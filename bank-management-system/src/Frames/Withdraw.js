import React from 'react'
import atm_1 from '../Images/atm.jpg';
import '../index.css';
import { Link } from 'react-router-dom';

export default function Withdraw() {
    let childStyle = {
        textDecoration: 'none',
        display: "flex",
        alignItems: "center"
      };
    

    return (
        <div className='image-container'>
            <div className='image-wrapper col-md-5'>
                <img src={atm_1} className='image img-fluid' alt="Bank" />
                <h6 className='image-text'>Enter the amount</h6>
                <div style={{ ...childStyle, justifyContent: "flex-end" }}>
                    <label htmlFor='number' className='image-text' />
                    <input type='number' id='number' className='login-btn btn_31' />
                    <Link className='login-btn btn1'>Withdraw</Link>
                    <Link className='login-btn btn_32' to={"/Login"}>Back</Link>
                </div>
            </div>
        </div>
    )
}
