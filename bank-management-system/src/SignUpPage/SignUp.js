import React, { useState } from 'react'
import bank_icon from '../Images/bank-icon-1.jpg';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../index.css';

export default function SignUp() {

  let navigate = useNavigate();
  // const[selectedGender, setSelectedGender] = useState('');

  const [banker, setBanker] = useState({
    name: "",
    father_name: "",
    dob: "",
    gender: "",
    email: "",
    marital_status: "",
    address: "",
    state: "",
    city: "",
    pincode: ""
  });

  const { name, father_name, dob, gender, email, marital_status, address, state, city, pincode } = banker; //gender

  const onInputChange = (e) => {
    const { value, name } = e.target;
    setBanker((banker) => ({ ...banker, [name]: value }));
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/signUp", banker)
    navigate("/additionalDetails");
  }

  return (
    <div className='container'>
      <div className="row">
        <div className='col-md-6 offset-md-3 border-dark rounded p-4 mt-2 shadow'>
          <div className='row align-items-center'>
            <div className='col-auto'>
              <img src={bank_icon} className='img-fluid' alt="Bank" />
            </div>
            <div className='col'>
              <h2>APPLICATION FORM NO: </h2>
              <h6>Page 1: Personal Details</h6>
            </div>
          </div><br />

          <form onSubmit={handleSubmit}>
            {/* <form >                  */}
            <div className="row mb-3">
              <label htmlFor="name" className="col-sm-4 col-form-label"><b>Name:</b></label>
              <div className="col-sm-7">
                <input name="name" type="name" className="form-control border-dark"
                  id="name" value={name} onChange={(e) => { onInputChange(e) }} placeholder="" required />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="Fname" className="col-sm-4 col-form-label"><b>Father's Name:</b></label>
              <div className="col-sm-7">
                <input name='father_name' type="Fname" className="form-control border-dark"
                  value={father_name} id="Fname" placeholder="" onChange={(e) => { onInputChange(e) }} required />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="dob" className="col-sm-4 col-form-label"><b>Date of Birth:</b></label>
              <div className="col-sm-7">
                <input name='dob' type="date" className="form-control border-dark"
                  value={dob} id="dob" onChange={(e) => { onInputChange(e) }} placeholder="" required />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4"><b>Gender</b></div>
              <div style={{paddingLeft: 7 + 'em',paddingTop: 0 +'em'}} >
                <div className="form-check form-check-inline">
                 <input className="form-check-input" type="radio" name="gender" id="male"
                    value="Male" onChange={(e) => { onInputChange(e) }} />Male
                  <label className="form-check-label"  htmlFor="male"></label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="gender" id="female"
                    value="Female" onChange={(e) => { onInputChange(e) }} />Female
                  <label className="form-check-label" htmlFor="female"></label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="gender" id="other"
                    value="Other" onChange={(e) => { onInputChange(e) }} />Other
                  <label className="form-check-label" htmlFor="other"></label>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="email" className="col-sm-4 col-form-label"><b>Email:</b></label>
              <div className="col-sm-7">
                <input name='email' type="email" className="form-control border-dark" value={email}
                  id="email" placeholder="" onChange={(e) => { onInputChange(e) }} required />
              </div>
            </div>
            <div className="row mb-1">
              <div className="col-sm-4"><b>Marital Status</b></div>
              <div style={{paddingLeft: 7 + 'em',paddingTop: 0 +'em'}} className="form-check">
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="marital_status" id="married"
                    value="Married" onChange={(e) => { onInputChange(e) }} />Married
                  <label className="form-check-label" htmlFor="married"></label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="marital_status" id="unmarried"
                    value="Unmarried" onChange={(e) => { onInputChange(e) }} />Unmarried
                  <label className="form-check-label" htmlFor="unmarried"></label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="marital_status" id="other_1"
                    value="Other" onChange={(e) => { onInputChange(e) }} />Other
                  <label className="form-check-label" htmlFor="other_1"></label>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="address" className="col-sm-4 col-form-label"><b>Address:</b></label>
              <div className="col-sm-7">
                <input name='address' type="address" className="form-control border-dark"
                  value={address} id="address" placeholder="" onChange={(e) => { onInputChange(e) }} required />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="state" className="col-sm-4 col-form-label"><b>State:</b></label>
              <div className="col-sm-7">
                <input name='state' type="state" className="form-control border-dark" value={state}
                  id="state" placeholder="" onChange={(e) => { onInputChange(e) }} required />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="city" className="col-sm-4 col-form-label"><b>City:</b></label>
              <div className="col-sm-7">
                <input name='city' type="city" className="form-control border-dark" value={city}
                  id="city" placeholder="" onChange={(e) => { onInputChange(e) }} required />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="pin" className="col-sm-4 col-form-label"><b>PinCode:</b></label>
              <div className="col-sm-7">
                <input name='pincode' type="number" className="form-control border-dark" value={pincode}
                  id="pin" placeholder="" onChange={(e) => { onInputChange(e) }} required />
              </div>
            </div>
            <Link  to="/">
              <button className="btn btn-dark float-mid mx-2" >Back</button>
            </Link>
            {/* <Link onClick={onClick} className="btn btn-dark float-end" to={"/additionalDetails"}>Next Page</Link> */}
            {/* <button className="btn btn-dark float-mid" >Back</button> */}
            {/* <button onClick={handleSubmit} className="btn btn-dark float-mid mx-2" >Next</button> */}
            <button type='submit' className="btn btn-dark float-mid mx-2" >Next</button>
          </form>
        </div>
      </div>
    </div>
  )
}
