import React, { useEffect, useState } from 'react'
import bank_icon from '../Images/bank-icon.jpg';
import { Link } from 'react-router-dom';


export default function WelcomPage() {
  // const[msg, setMsg] = useState();
  const[cardNum, setCardNum] = useState('');
  const[pin, setPin] = useState('');

  // const handleChange = (e)=>{
  //   e.preventDefault();
  //   setCardNum(e.target.value);
    
  // }

  const handleClick = (e) =>{
    // window.location.reload(false);
    e.preventDefault();
    setCardNum('')
    setPin('')
  }

  return (
    <div className='container'>
        <div className="row">
            <div className='col-md-6 offset-md-3 border-dark rounded p-4 mt-2 shadow'>
                <img src={bank_icon} className="img-fluid" alt="Bank"/>
                <h2 className='text-center m-1'>Welcome to ATM Machine</h2><br/>
                <form>
                <div className="row mb-4">
                   <label htmlFor="cardNum" className="col-sm-4 col-form-label"><b>Card No:</b></label>
                   <div className="col-sm-7">
                     <input type="number" onChange={(e) => setCardNum(e.target.value)} className="form-control border-dark" value={cardNum} id="cardNum" placeholder=""/>
                   </div>
                </div>
                <div className="row mb-3">
                   <label htmlFor="pin" className="col-sm-4 col-form-label"><b>PIN:</b></label>
                   <div className="col-sm-7">
                     <input type="password" onChange={(e) => setPin(e.target.value)} className="form-control border-dark" id="pin" value={pin} placeholder=""/>
                   </div>
                </div> <br/>
                <div className="d-grid gap-2 d-md-block">
                    <button type="submit" className="btn btn-outline-dark">Sign In</button>
                    <button onClick={ handleClick} className="btn btn-outline-dark mx-2 "> Clear </button>
                </div><br></br>
                <div className="d-grid gap-2 col-sm-6 mx-auto">
                <Link type="submit" className="btn btn-outline-dark mx-2" to={"/signup"}>Sign Up</Link>
                </div>
                </form>
            </div>
        </div>
    </div>            
  )
}
