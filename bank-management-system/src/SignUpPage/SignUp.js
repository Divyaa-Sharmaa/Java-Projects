import React, { useState } from 'react'
import bank_icon from '../Images/bank-icon-1.jpg';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SignUp() {

  let navigate = useNavigate();

  const[banker, setBanker] = useState({
    name: "",
    father_name:"",
    dob:"",
    gender:"",
    email: "",
    marital_status: "",
    address: "",
    state: "",
    city: "",
    pincode: ""
  });

  const {name,father_name,dob,gender, email,marital_status,address,state,city,pincode} = banker;

  const onInputChange = (e) => {
    setBanker({...banker,[e.target.name]:e.target.value})
  }

  const onClick = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/signup/signUp",banker)
    navigate("/additionalDetails");
}

  return (
    <div className='container'>
        <div className="row">
            <div className='col-md-6 offset-md-3 border-dark rounded p-4 mt-2 shadow'>
              <div className='row align-items-center'>
                <div className='col-auto'>
                    <img src={bank_icon} className='img-fluid' alt="Bank"/>
                </div>
                <div className='col'>
                    <h2>APPLICATION FORM NO: </h2>
                    <h6>Page 1: Personal Details</h6>
                </div> 
              </div><br/>
              <form>
                <div className="row mb-3">
                   <label htmlFor="name" className="col-sm-4 col-form-label"><b>Name:</b></label>
                   <div className="col-sm-7">
                     <input name="name" type="name" className="form-control border-dark" 
                     id="name" value={name} onChange={(e) => {onInputChange(e)}} placeholder=""/>
                   </div>
                </div>
                <div className="row mb-3">
                   <label htmlFor="Fname" className="col-sm-4 col-form-label"><b>Father's Name:</b></label>
                   <div className="col-sm-7">
                     <input name='father_name' type="Fname" className="form-control border-dark" 
                     value={father_name} id="Fname" placeholder="" onChange={(e) => {onInputChange(e)}}/>
                   </div>
                </div>              
                <div className="row mb-3">
                   <label htmlFor="dob" className="col-sm-4 col-form-label"><b>Date of Birth:</b></label>
                   <div className="col-sm-7">
                     <input name='dob' type="date" className="form-control border-dark" 
                     value={dob} id="dob" onChange={(e) => {onInputChange(e)}} placeholder=""/>
                   </div>
                </div>           
                <div className="row mb-3">
                   <label htmlFor="gender" className="col-sm-4 col-form-label"><b>Gender:</b></label>
                   <div className="col-sm-6">
                     <div className="form-check form-check-inline">
                       <input  className="form-check-input" type="radio" name="gender" id="male" 
                       value={gender} onChange={(e) => {onInputChange(e)}}/>
                       <label className="form-check-label" htmlFor="male">Male</label>
                     </div>
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" type="radio" name="gender" id="female" 
                       value={gender} onChange={(e) => {onInputChange(e)}}/>
                       <label className="form-check-label" htmlFor="female">Female</label>
                     </div>
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" type="radio" name="gender" id="other" 
                       value={gender} onChange={(e) => {onInputChange(e)}}/>
                       <label className="form-check-label" htmlFor="other">Other</label>
                     </div>
                   </div>
                </div>
                <div className="row mb-3">
                   <label htmlFor="email" className="col-sm-4 col-form-label"><b>Email:</b></label>
                   <div className="col-sm-7">
                     <input name='email' type="email" className="form-control border-dark" value={email} 
                     id="email" placeholder="" onChange={(e) => {onInputChange(e)}}/>
                   </div>
                </div> 
                <div className="row mb-3">
                   <label htmlFor="status" className="col-sm-4 col-form-label"><b>Marital Status:</b></label>
                   <div className="col-sm-7">
                     <div className="form-check form-check-inline">
                       <input  className="form-check-input" type="radio" name="status" id="married" 
                       value={marital_status} onChange={(e) => {onInputChange(e)}}/>
                       <label className="form-check-label" htmlFor="married">Married</label>
                     </div>
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" type="radio" name="status" id="unmarried"
                        value={marital_status} onChange={(e) => {onInputChange(e)}}/>
                       <label className="form-check-label" htmlFor="unmarried">Unmarried</label>
                     </div>
                     {/* <div className="form-check form-check-inline">
                       <input className="form-check-input" type="radio" name="marital_status" id="other" 
                       value={marital_status} onChange={(e) => {onInputChange(e)}}/>
                       <label className="form-check-label" htmlFor="other">Other</label>
                     </div> */}
                   </div>
                </div> 
                <div className="row mb-3">
                   <label htmlFor="address" className="col-sm-4 col-form-label"><b>Address:</b></label>
                   <div className="col-sm-7">
                     <input name='address' type="address" className="form-control border-dark" 
                     value={address} id="address" placeholder="" onChange={(e) => {onInputChange(e)}}/>
                   </div>
                </div>   
                <div className="row mb-3">
                   <label htmlFor="state" className="col-sm-4 col-form-label"><b>State:</b></label>
                   <div className="col-sm-7">
                     <input name='state' type="state" className="form-control border-dark" value={state}
                      id="state" placeholder="" onChange={(e) => {onInputChange(e)}}/>
                   </div>
                </div>   
                <div className="row mb-3">
                   <label htmlFor="city" className="col-sm-4 col-form-label"><b>City:</b></label>
                   <div className="col-sm-7">
                     <input name='city' type="city" className="form-control border-dark" value={city}
                      id="city" placeholder="" onChange={(e) => {onInputChange(e)}}/>
                   </div>
                </div>   
                <div className="row mb-3">
                   <label htmlFor="pin" className="col-sm-4 col-form-label"><b>PinCode:</b></label>
                   <div className="col-sm-7">
                     <input name='pincode' type="number" className="form-control border-dark" value={pincode}
                      id="pin" placeholder="" onChange={(e) => {onInputChange(e)}}/>
                   </div>
                </div>   
                {/* <Link onClick={onClick} className="btn btn-dark float-end" to={"/additionalDetails"}>Next Page</Link> */}
                <button onClick={onClick} className="btn btn-dark float-mid" >Back</button>
                <button onClick={onClick} className="btn btn-dark float-mid mx-2" >Next</button>
                </form>
            </div>
        </div>       
    </div>
  )
}
