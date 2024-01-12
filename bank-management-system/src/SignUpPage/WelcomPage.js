import React, { useEffect, useState } from 'react'
import bank_icon from '../Images/bank-icon.jpg';
import { Link } from 'react-router-dom';


export default function WelcomPage() {
  const[msg, setMsg] = useState();

  const handleChange = (e)=>{
    setMsg(e.target.value);
  }

  // useEffect(() => {
    
  // }, [])
  

  const handleClick = () =>{
    setMsg('');
  }

  return (
    <div className='container'>
        <div className="row">
            <div className='col-md-6 offset-md-3 border-dark rounded p-4 mt-2 shadow'>
                <img src={bank_icon} className="img-fluid" alt="Bank"/>
                <h2 className='text-center m-1'>Welcome to ATM Machine</h2><br/>
                <form>
                <div className="row mb-4">
                   <label for="Number" className="col-sm-4 col-form-label"><b>Card No:</b></label>
                   <div className="col-sm-7">
                     <input type="number" onChange={handleChange} className="form-control border-dark" id="Number" placeholder=""/>
                   </div>
                </div>
                <div className="row mb-3">
                   <label for="pin" className="col-sm-4 col-form-label"><b>PIN:</b></label>
                   <div className="col-sm-7">
                     <input type="password" onChange={handleChange} className="form-control border-dark" id="pin" placeholder=""/>
                   </div>
                </div> <br/>
                <div class="d-grid gap-2 d-md-block">
                    <button type="submit" className="btn btn-outline-dark">Sign In</button>
                    <button onClick={handleClick} className="btn btn-outline-dark mx-2 "> Clear </button>
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
