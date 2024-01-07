import React from 'react'
import bank_icon from '../Images/bank-icon2.jpg';
import { Link } from 'react-router-dom';

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
                      <h4>Account Details</h4>
                    </div> 
               </div><br/>
               <div className="row mb-3">
                   <label htmlFor="aadhar" className="col-sm-4 col-form-label"><b>Aadhar number:</b></label>
                   <div className="col-sm-7">
                     <input className="form-control border-dark" id="aadhar" placeholder="XXXX-XXXX-XXXX"/>       
                   </div>
               </div>
               <div className="row mb-3">
                   <label htmlFor="accountType" className="col-sm-4 col-form-label"><b>Account type:</b></label>
                   <div className="col-sm-7">
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" type="radio" name="accountType" id="savingAccount" value="" />
                       <label className="form-check-label" htmlFor="savingAccount">Saving Account</label>
                     </div>
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" type="radio" name="accountType" id="salaryAccount" value="" />
                       <label className="form-check-label" htmlFor="salaryAccount">Salary Account</label>
                     </div>
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" type="radio" name="accountType" id="FD" value="" />
                       <label className="form-check-label" htmlFor="FD">Fixed Deposit Account</label>
                     </div>
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" type="radio" name="accountType" id="other" value="" />
                       <label className="form-check-label" htmlFor="other">Other</label>
                     </div>
                 </div> 
               </div>
               <div className="row mb-3">
               <label htmlFor="cardnum" className="col-sm-4 col-form-label"><b>Card number:</b> <div><h6><i>Your 16 Digit Card number</i></h6></div></label>
                   <div className="col-sm-7">
                     <input className="form-control border-dark" id="cardnum" placeholder="XXXX-XXXX-XXXX-6785"/>       
                   </div>
               </div>
               <div className="row mb-3">
               <label htmlFor="pin" className="col-sm-4 col-form-label"><b>PIN:</b><div><h6><i>Your 4 Digit Pin</i></h6></div></label>
                   <div className="col-sm-7">
                     <input className="form-control border-dark" id="pin" placeholder="XXXX"/>
                   </div>
               </div>
                <div className="row mb-3">
                   <label htmlFor="services" className="col-sm-4 col-form-label"><b>Services Required:</b></label>
                   <div className="col-sm-8">
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" type="checkbox" name="atm_card" id="atm_card" value="atm_card" />
                       <label className="form-check-label" htmlFor="atm_card">ATM Card</label>
                     </div>
                     <div className="form-check form-check-inline">
                     <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                     <label class="form-check-label" for="flexCheckDefault">Internet Banking</label>         
                     </div>
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" type="checkbox" name="" id="mobileBanking" value="" />
                       <label className="form-check-label" htmlFor="mobileBanking">Mobile Banking</label>
                     </div>
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" type="checkbox" name="" id="alerts" value="" />
                       <label className="form-check-label" htmlFor="alerts">Email & SMS Alerts</label>
                     </div>
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" type="checkbox" name="" id="chequeBook" value="" />
                       <label className="form-check-label" htmlFor="chequeBook">Cheque Book</label>
                     </div>
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" type="checkbox" name="" id="statement" value="" />
                       <label className="form-check-label" htmlFor="statement">Statement</label>
                     </div>
                    </div>
                </div>
                <div className='form-check'>
                    <input className="form-check-input" type="checkbox" name="" id="statement" value=""/>
                    <label className="form-check-label" type="checkbox"> 
                  I hereby declare that above entered details are correct to the best of my knowledge.
                    </label>
                </div> <br/>
                <div class="d-grid gap-2 d-md-block">
                   <Link className="btn btn-dark mx-2 " to={"/signup"}>Back</Link>
                   <Link className="btn btn-dark mx-2 " >Submit</Link>
                   <Link className="btn btn-dark mx-2 " to={"/"}>Cancel</Link> 
                </div>
              </div>      
        </div> 
    </div>             
  )
}
