import React from 'react'
import bank_icon from '../Images/bank-icon2.jpg';
// import { Link } from 'react-router-dom';

export default function AdditionalDetails() {
  return (
    <div className='container'>
        <div className="row">
            <div className='col-md-6 offset-md-3 border-dark rounded p-4 mt-2 shadow'>
              <div className='row align-items-center'>
                  <div className='col-auto'>
                     <img src={bank_icon} className='img-fluid' alt="Bank"/>
                  </div>
                  <div className='col'>
                      <h3>Page 1: Account Details</h3>
                    </div> 
               </div><br/>
               <div className="row mb-3">
                   <label htmlFor="citizen" className="col-sm-4 col-form-label"><b>Senior Citizen:</b></label>
                   <div className="col-sm-6">
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" type="radio" name="citizen" id="yes" value="yes" />
                       <label className="form-check-label" htmlFor="yes">Yes</label>
                     </div>
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" type="radio" name="citizen" id="no" value="no" />
                       <label className="form-check-label" htmlFor="no">No</label>
                     </div>
                 </div> 
               </div>
               <div className="row mb-3">
                   <label htmlFor="accountType" className="col-sm-4 col-form-label"><b>Account type:</b></label>
                   <div className="col-sm-7">
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" type="radio" name="accountType" id="accountType" value="accountType" />
                       <label className="form-check-label" htmlFor="accountType">Saving Account</label>
                     </div>
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" type="radio" name="accountType" id="accountType" value="accountType" />
                       <label className="form-check-label" htmlFor="accountType">Salary Account</label>
                     </div>
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" type="radio" name="accountType" id="accountType" value="accountType" />
                       <label className="form-check-label" htmlFor="accountType">Fixed Deposit Account</label>
                     </div>
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" type="radio" name="accountType" id="accountType" value="accountType" />
                       <label className="form-check-label" htmlFor="accountType">Other</label>
                     </div>
                 </div> 
               </div>
               <div className="row mb-3">
               <label htmlFor="cardnum" className="col-sm-4 col-form-label"><b>Card number:</b></label>
                   <div className="col-sm-7">
                     <input className="form-control border-dark" id="cardnum" placeholder=""/>
                   </div>
               </div>
               <div className="row mb-3">
               <label htmlFor="pin" className="col-sm-4 col-form-label"><b>PIN:</b></label>
                   <div className="col-sm-7">
                     <input className="form-control border-dark" id="pin" placeholder=""/>
                   </div>
               </div>
  
            </div>
        </div> 
    </div>             
  )
}
