import React from 'react'
import atm_1 from '../Images/atm.jpg';
import '../index.css';
import { Link } from 'react-router-dom';

export default function BalanceEnquiry() {
    let childStyle = {
        textDecoration: 'none',
        display: "flex",
        alignItems: "center"
      };
    

    return (
        <div className='image-container'>
            <div className='image-wrapper col-md-5'>
                <img src={atm_1} className='image img-fluid' alt="Bank" />
                <h6 className='image-text'>Your Current Account Balance is </h6>
                <div style={{ ...childStyle, justifyContent: "flex-end" }}>
                    <Link className='login-btn btn_32' to={"/Login"}>Back</Link>
                </div>
            </div>
        </div>
    )
}
