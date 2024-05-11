import React, { useEffect, useState } from "react";
import { addEmployee, updateEmployee } from "../Service/EmployeeService";
import { getEmployee } from "../Service/EmployeeService";
import {useNavigate, useParams } from "react-router-dom";

export const EmployeeComponent = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const {id} = useParams();
  const navigator= useNavigate();

  function pageTitle(){
    if(id){
      return <h2 className="text-center">Update Employee</h2>
    }else{
      return <h2 className="text-center">Add Employee</h2>
    }
  }

  const [errors, setErrors] = useState({
    firstName:'',
    lastName:'',
    email:''
  })

  useEffect(()=>{
    if(id){
      getEmployee(id).then((response)=>{
        setfirstName(response.data.firstName)
        setLastname(response.data.lastName)
        setEmail(response.data.email)
      }).catch(err=>{
        console.log(err)
      })
    }
  },[id])
   function validationForm(){
     let isValid = true;

    let errorCopy={...errors}

    if(firstName.trim()){
      errorCopy.firstName="";
    }else{
      errorCopy.firstName="First Name is required"
      isValid=false;
    }

    if(lastName.trim()){
      errorCopy.lastName="";
    }else{
      errorCopy.lastName="Last Name is required"
      isValid=false;
    }

    if(email.trim()){
      errorCopy.email="";
    }else{
      errorCopy.email="Email is required"
      isValid=false;
    }

    setErrors(errorCopy);

    return isValid;

   }

   function saveOrUpdateEmployee(e){
    e.preventDefault();

    if(validationForm()){
      const employee = {firstName, lastName, email}
      console.log(employee);
  
      if(id){
        updateEmployee(id,employee).then((res)=>{
          console.log(res.data)
          navigator("/employees")
        }).catch((err)=>{
          console.error(err)
        })
      }else{
        addEmployee(employee).then((res)=>{
          console.log(res.data);
          navigator("/employees")
        }).catch((err)=>{
          console.log(err)
        })
      }

     
    }
  }

 

  
  return (
    <div className="container"><br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
        {pageTitle()}
          <div className="card-body">
            <form >
              <div className="form-group mb-3">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your firstName"
                  className={`form-control ${errors.firstName? "is-invalid":""} `}
                  value={firstName}
                  id="firstName"
                  onChange={(e) =>setfirstName(e.target.value)}
                  required
                />
                {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
              </div>
              <div className="form-group mb-3">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input type="text" 
                placeholder="Enter your lastName" 
                className={`form-control ${errors.lastName? "is-invalid":""} `} 
                value={lastName}
                id="lastName" 
                onChange={(e) =>setLastname(e.target.value)}
                required
                />
                {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
              </div>
              <div className="form-group mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" 
                placeholder="Enter your email" 
                className={`form-control ${errors.email? "is-invalid":""} `}  
                value={email}
                id="email"
                aria-describedby="emailHelp" 
                onChange={(e) => setEmail(e.target.value)}
                required
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
              <button type="submit" className="btn btn-primary" onClick={saveOrUpdateEmployee}>
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;
