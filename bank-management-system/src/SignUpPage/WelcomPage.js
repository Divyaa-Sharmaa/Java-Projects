import React, { useEffect, useState } from "react";
import bank_icon from "../Images/bank-icon.jpg";
import { Link, useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import Login from "../LoginPage/Login";

export default function WelcomPage() {
  const [card_no, setCardNum] = useState("");
  const [pin_no, setPin] = useState("");
  const navigate = useNavigate();
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border-dark rounded p-4 mt-2 shadow">
          <img src={bank_icon} className="img-fluid" alt="Bank" />
          <h2 className="text-center m-1">Welcome to ATM Machine</h2>
          <br />
        
          <form>
            <div className="row mb-4">
              <label htmlFor="cardNum" className="col-sm-4 col-form-label">
                <b>Card No</b>
              </label>
              <div className="col-sm-7">
                <input
                  type="number"
                  name="card_no"
                  onChange={(e) => setCardNum(e.target.value)}
                  className="form-control border-dark"
                  value={card_no}
                  id="cardNum"
                  placeholder=""
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="pin" className="col-sm-4 col-form-label">
                <b>PIN</b>
              </label>
              <div className="col-sm-7">
                <input
                  type="password"
                  name="pin_no"
                  onChange={(e) => setPin(e.target.value)}
                  className="form-control border-dark"
                  id="pin"
                  value={pin_no}
                  placeholder=""
                />
              </div>
            </div>{" "}
            <br />
            <div className="d-grid gap-2 d-md-block">
              <Link
                type="submit"
                className="btn btn-outline-dark"
                to={"/Login"}
              >
                Sign In
              </Link>
              {/* <button className="btn btn-outline-dark">Login</button> */}
              {/* {errorMsg && <div>{errorMsg}</div>} */}
              <button
                // onClick={handleClick} onClick={handleLogin}
                className="btn btn-outline-dark mx-2 "
              >
                {" "}
                Clear{" "}
              </button>
              {/* <div>{loginMessage}onClick={handleLogin}</div> */}
            </div>
            <br></br>
            <div className="d-grid gap-2 col-sm-6 mx-auto">
              <Link
                type="submit"
                className="btn btn-outline-dark mx-2"
                to={"/signup"}
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
