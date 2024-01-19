import { React, useState } from 'react'
import bank_icon from '../Images/bank-icon2.jpg';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../index.css';
// import { useState } from 'react';

export default function AdditionalDetails() {

  let navigate = useNavigate();

  const [accountDetails, setAccountDetails] = useState({
    "aadhar": "",
    "accountType": "",
    "cardNo": "",
    "pinNo": "",
    "facility": ""
  });

  // const[facilities,setFacilities] = useState([]);

  const { aadhar, accountType, cardNo, pinNo, facility } = accountDetails;

  const onInputChange = (e) => {
    const { value, name } = e.target;
    // e.preventDefault(); Banker((banker)=>({...banker, [name]: value}));
    setAccountDetails((accountDetails) => ({ ...accountDetails, [name]: value }))
  }

  // const handleFacilities = (e) =>{
  //   console.log("you checked me");
  //   if(e.target.checked){
  //     setFacilities(...setFacilities,value);
  //   }else{
  //     setFacilities(facilities.filter((e) =>  !== value));
  //   }
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/accountDetails", accountDetails)
    navigate("/Login");
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
              <h4>Account Details</h4>
            </div>
          </div>
          <br />
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <label htmlFor="aadhaar" className="col-sm-4 col-form-label"><b>Aadhar number</b></label>
              <div className="col-sm-7">
                <input type='number' name='aadhar' className="form-control border-dark" id="aadhaar" value={aadhar}
                  onChange={(e) => { onInputChange(e) }} placeholder="XXXX-XXXX-XXXX" required />
              </div>
            </div>
            <div className="row mb-1">
              <p className="col-sm-4"><b>Account type</b></p>
              <div style={{paddingLeft: 9 + 'em',paddingTop: 0 +'em'}}>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" onChange={(e) => { onInputChange(e) }}
                    type="radio" name="accountType" id="savingAccount" value="Saving Account" />Saving Account
                  <label className="form-check-label" htmlFor="savingAccount"></label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" onChange={(e) => { onInputChange(e) }}
                    type="radio" name="accountType" id="salaryAccount" value="Salary Account" />Salary Account
                  <label className="form-check-label" htmlFor="salaryAccount"></label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" onChange={(e) => { onInputChange(e) }}
                    type="radio" name="accountType" id="fixedDepositAccount" value="Fixed Deposit Account" />Fixed Deposit Account
                  <label className="form-check-label" htmlFor="fixedDepositAccount"></label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" onChange={(e) => { onInputChange(e) }}
                    type="radio" name="accountType" id="other" value="Other" />Other
                  <label className="form-check-label" htmlFor="other"></label>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="Card" className="col-sm-4 col-form-label"><b>Card number</b> <div><h6><i>Your 16 Digit Card number</i></h6></div></label>
              <div className="col-sm-7">
                <input type='number' name='cardNo' className="form-control border-dark" onChange={(e) => { onInputChange(e) }}
                  id="Card" value={cardNo} placeholder="XXXX-XXXX-XXXX-6785" required />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="pin" className="col-sm-4 col-form-label"><b>PIN</b><div><h6><i>Your 4 Digit Pin</i></h6></div></label>
              <div className="col-sm-7">
                <input type='number' name='pinNo' className="form-control border-dark" onChange={(e) => { onInputChange(e) }}
                  id="pin" value={pinNo} placeholder="XXXX" required />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4"><b>Services Required</b></div>
              <div style={{paddingLeft: 5 + 'em',paddingTop: 0 +'em'}}>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" onChange={(e) => { onInputChange(e) }}
                    type="radio" id="atm_card" name="facility" value="ATM Card" />ATM Card
                  <label className="form-check-label" htmlFor="atm_card"></label>
                </div>
                <div className="form-check form-check-inline">
                  <input id='Internetservices' className="form-check-input" onChange={(e) => { onInputChange(e) }}
                    type="radio" value="Internet Banking" name="facility" />Internet Banking
                  <label className="form-check-label" htmlFor="Internetservices"></label> 
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" onChange={(e) => { onInputChange(e) }}
                    type="radio" id="mobileBanking" name="facility" value="Mobile Banking" />Mobile Banking
                  <label className="form-check-label" htmlFor="mobileBanking"></label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" onChange={(e) => { onInputChange(e) }}
                    type="radio" id="alerts" name="facility" value="Email & SMS Alerts" />Email & SMS Alerts
                  <label className="form-check-label" htmlFor="alerts"></label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" onChange={(e) => { onInputChange(e) }}
                    type="radio" id="chequeBook" name="facility" value="Cheque Book" />Cheque Book
                  <label className="form-check-label" htmlFor="chequeBook"></label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" onChange={(e) => { onInputChange(e) }}
                      type="radio" id="statement" name="facility" value="Statement" />Statement
                  <label className="form-check-label" htmlFor="statement"></label>
                </div>
              </div>
            </div>
              <div className='form-check'>
              <input className="form-check-input" type="checkbox" name="Agree" id="agreement" value="" required />
                I hereby declare that above entered details are correct to the best of my knowledge.
                <label className="form-check-label" type="checkbox" htmlFor='agreement'>
              </label>
            </div> <br />
            <div className="d-grid gap-2 d-md-block">
              <Link className="btn btn-dark mx-2 " to={"/signup"}>Back</Link>
              <button type='submit' className="btn btn-dark mx-2 ">Submit</button>
              <Link className="btn btn-dark mx-2 " to={"/"}>Cancel</Link>
              {/* onClick={handleSubmit}                   */}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
