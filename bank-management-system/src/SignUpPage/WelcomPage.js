import React, { useEffect, useState } from "react";
import bank_icon from "../Images/bank-icon.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function WelcomPage() {
  const [cardNum, setCardNum] = useState("");
  const [pin, setPin] = useState("");

  const navigate = useNavigate();
  const handleClick = (e) => {
    // window.location.reload(false);
    e.preventDefault();
    setCardNum("");
    setPin("");
  };
  // const [cardNumber, setCardNumber] = useState('');
  //   const [pinNo, setPinNo] = useState('');
  //   const [loginMessage, setLoginMessage] = useState('');

    const handleLogin = async () => {
    //     try {
    //         const response = await fetch(`http://localhost:8080/api/login?card_no=${cardNumber}&pin_no=${pinNo}`);
    //         if (response.ok) {
    //             setLoginMessage('Login successful!');
                navigate('/Login');
    //             console.log("login here....");
    //         } else {
    //             setLoginMessage('Login failed. Please check your card number and PIN.');
    //             console.log("hello we are there....");
            }
    //     } catch (error) {
    //         console.error('Error during login:', error);
    //     }
    // };
  // const loadUser = async () => {
  //   const result = await axios.get(
  //     ``
  //   );
  //   setUser(result.data);
  // };

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
                  name="Card No"
                  onChange={(e) => setCardNum(e.target.value)}
                  className="form-control border-dark"
                  value={cardNum}
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
                  name="PIN"
                  onChange={(e) => setPin(e.target.value)}
                  className="form-control border-dark"
                  id="pin"
                  value={pin}
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
              {/* <button onClick={handleLogin} className="btn btn-outline-dark">Login</button> */}
              <button
                onClick={handleClick}
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
