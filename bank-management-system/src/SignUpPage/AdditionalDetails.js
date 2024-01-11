import {React , useState} from 'react'
import bank_icon from '../Images/bank-icon2.jpg';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { useState } from 'react';

export default function AdditionalDetails() {

  let navigate = useNavigate();

  const[accountDetails, setAccountDetails] = useState({
   "aadhar": "",
   "accountType":"",
   "cardNo" : "",
   "pinNo" : "",
   "facilities": ""
  });

  const {aadhar,accountType,cardNo,pinNo, facilities} = accountDetails;

  const onInputChange = (e) => {
    setAccountDetails({...accountDetails,[e.target.name]:e.target.value})
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/accountDetails",accountDetails)
    navigate("/");
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
                      <h4>Account Details</h4>
                    </div> 
               </div>
               <br/>
               <form onSubmit={(e)=>onSubmit(e)}> 
               <div className="row mb-3">
                   <label htmlFor="aadhar" className="col-sm-4 col-form-label"><b>Aadhar number:</b></label>
                   <div className="col-sm-7">
                     <input name='aadhar' className="form-control border-dark" id="aadhar" value={aadhar}
                     onChange={(e) => {onInputChange(e)}} placeholder="XXXX-XXXX-XXXX"/>       
                   </div>
               </div>
               <div className="row mb-3">
                   <label htmlFor="accountType" className="col-sm-4 col-form-label"><b>Account type:</b></label>
                   <div className="col-sm-7">
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" onChange={(e) => {onInputChange(e)}} 
                       type="radio" name="accountType" id="savingAccount" value={accountType} />
                       <label className="form-check-label" htmlFor="savingAccount">Saving Account</label>
                     </div>
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" onChange={(e) => {onInputChange(e)}}
                        type="radio" name="accountType" id="salaryAccount" value={accountType} />
                       <label className="form-check-label" htmlFor="salaryAccount">Salary Account</label>
                     </div>
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" onChange={(e) => {onInputChange(e)}} 
                       type="radio" name="accountType" id="FD" value={accountType} />
                       <label className="form-check-label" htmlFor="FD">Fixed Deposit Account</label>
                     </div>
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" onChange={(e) => {onInputChange(e)}}
                        type="radio" name="accountType" id="other" value={accountType} />
                       <label className="form-check-label" htmlFor="other">Other</label>
                     </div>
                 </div> 
               </div>
               <div className="row mb-3">
               <label htmlFor="cardnum" className="col-sm-4 col-form-label"><b>Card number:</b> <div><h6><i>Your 16 Digit Card number</i></h6></div></label>
                   <div className="col-sm-7">
                     <input name='cardNo' className="form-control border-dark" onChange={(e) => {onInputChange(e)}} 
                     id="cardnum" value={cardNo} placeholder="XXXX-XXXX-XXXX-6785"/>       
                   </div>
               </div>
               <div className="row mb-3">
               <label htmlFor="pin" className="col-sm-4 col-form-label"><b>PIN:</b><div><h6><i>Your 4 Digit Pin</i></h6></div></label>
                   <div className="col-sm-7">
                     <input name='pinNo' className="form-control border-dark" onChange={(e) => {onInputChange(e)}}
                      id="pin" value={pinNo} placeholder="XXXX"/>
                   </div>
               </div>
                <div className="row mb-3">
                   <label htmlFor="services" className="col-sm-4 col-form-label"><b>Services Required:</b></label>
                   <div className="col-sm-8">
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" onChange={(e) => {onInputChange(e)}} 
                       type="checkbox" name="facilities" id="atm_card" value={facilities} />
                       <label className="form-check-label" htmlFor="atm_card">ATM Card</label>
                     </div>
                     <div className="form-check form-check-inline">
                     <input name='facilities' class="form-check-input" onChange={(e) => {onInputChange(e)}} type="checkbox" 
                     value={facilities} id="Internetservices"/>
                     <label class="form-check-label" for="Internetservices">Internet Banking</label>         
                     </div>
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" onChange={(e) => {onInputChange(e)}}
                        type="checkbox" name="facilities" id="mobileBanking" value={facilities} />
                       <label className="form-check-label" htmlFor="mobileBanking">Mobile Banking</label>
                     </div>
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" onChange={(e) => {onInputChange(e)}} 
                       type="checkbox" name="facilities" id="alerts" value={facilities} />
                       <label className="form-check-label" htmlFor="alerts">Email & SMS Alerts</label>
                     </div>
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" onChange={(e) => {onInputChange(e)}} type="checkbox"
                        name="facilities" id="chequeBook" value={facilities}/>
                       <label className="form-check-label" htmlFor="chequeBook">Cheque Book</label>
                     </div>
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" onChange={(e) => {onInputChange(e)}}
                        type="checkbox" name="facilities" id="statement" value={facilities} />
                       <label className="form-check-label" htmlFor="statement">Statement</label>
                     </div>
                    </div>
                </div> </form>
                <div className='form-check'>
                    <input className="form-check-input"  type="checkbox" name="" id="statement" value=""/>
                    <label className="form-check-label" type="checkbox"> 
                  I hereby declare that above entered details are correct to the best of my knowledge.
                    </label>
                </div> <br/>
                <div class="d-grid gap-2 d-md-block">
                   <Link className="btn btn-dark mx-2 " to={"/signup"}>Back</Link>
                   <Link className="btn btn-dark mx-2 " to={"/"}>Submit</Link>
                   <Link className="btn btn-dark mx-2 " to={"/"}>Cancel</Link> 
                </div>
              </div>      
        </div> 
    </div>             
  )
}
