import React from 'react'
import bank_icon from '../Images/bank-icon-1.jpg';
import { Link } from 'react-router-dom';

export default function SignUp() {
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
                   <label for="name" className="col-sm-4 col-form-label"><b>Name:</b></label>
                   <div className="col-sm-7">
                     <input type="name" className="form-control border-dark" id="name" placeholder=""/>
                   </div>
                </div>
                <div className="row mb-3">
                   <label for="Fname" className="col-sm-4 col-form-label"><b>Father's Name:</b></label>
                   <div className="col-sm-7">
                     <input type="Fname" className="form-control border-dark" id="Fname" placeholder=""/>
                   </div>
                </div>              
                <div className="row mb-3">
                   <label htmlFor="dob" className="col-sm-4 col-form-label"><b>Date of Birth:</b></label>
                   <div className="col-sm-7">
                     <input type="date" className="form-control border-dark" id="dob" placeholder=""/>
                   </div>
                </div>           
                <div className="row mb-3">
                   <label htmlFor="gender" className="col-sm-4 col-form-label"><b>Gender:</b></label>
                   <div className="col-sm-6">
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" type="radio" name="gender" id="male" value="male" />
                       <label className="form-check-label" htmlFor="male">Male</label>
                     </div>
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" type="radio" name="gender" id="female" value="female" />
                       <label className="form-check-label" htmlFor="female">Female</label>
                     </div>
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" type="radio" name="gender" id="other" value="other" />
                       <label className="form-check-label" htmlFor="other">Other</label>
                     </div>
                   </div>
                </div>
                <div className="row mb-3">
                   <label htmlFor="email" className="col-sm-4 col-form-label"><b>Email:</b></label>
                   <div className="col-sm-7">
                     <input type="email" className="form-control border-dark" id="email" placeholder=""/>
                   </div>
                </div> 
                <div className="row mb-3">
                   <label htmlFor="status" className="col-sm-4 col-form-label"><b>Marital Status:</b></label>
                   <div className="col-sm-7">
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" type="radio" name="gender" id="married" value="married" />
                       <label className="form-check-label" htmlFor="married">Married</label>
                     </div>
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" type="radio" name="status" id="unmarried" value="unmarried" />
                       <label className="form-check-label" htmlFor="unmarried">Unmarried</label>
                     </div>
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" type="radio" name="status" id="other" value="other" />
                       <label className="form-check-label" htmlFor="other">Other</label>
                     </div>
                   </div>
                </div> 
                <div className="row mb-3">
                   <label htmlFor="address" className="col-sm-4 col-form-label"><b>Address:</b></label>
                   <div className="col-sm-7">
                     <input type="address" className="form-control border-dark" id="address" placeholder=""/>
                   </div>
                </div>   
                <div className="row mb-3">
                   <label htmlFor="state" className="col-sm-4 col-form-label"><b>State:</b></label>
                   <div className="col-sm-7">
                     <input type="state" className="form-control border-dark" id="state" placeholder=""/>
                   </div>
                </div>   
                <div className="row mb-3">
                   <label htmlFor="city" className="col-sm-4 col-form-label"><b>City:</b></label>
                   <div className="col-sm-7">
                     <input type="city" className="form-control border-dark" id="city" placeholder=""/>
                   </div>
                </div>   
                <div className="row mb-3">
                   <label htmlFor="pin" className="col-sm-4 col-form-label"><b>PinCode:</b></label>
                   <div className="col-sm-7">
                     <input type="number" className="form-control border-dark" id="pin" placeholder=""/>
                   </div>
                </div>   
                <Link className="btn btn-dark float-end" to={"/additionalDetails"}>Next Page</Link>
                </form>
            </div>
        </div>       
    </div>
  )
}
