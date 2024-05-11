import React, { useEffect, useState } from 'react'
import { listEmployees, deleteEmp } from '../Service/EmployeeService';
import {useNavigate} from 'react-router-dom'

export const ListEmployeeComponent = () => {

   const [employees, setEmployees] = useState([]);

   const navigator = useNavigate();

   useEffect(()=>{
    getAllEmployee()
   },[])

   function getAllEmployee(){
    listEmployees().then((res)=>{
        setEmployees(res.data);
    }).catch(error=>{
        console.log(error)
    })
   }

   function addEmployee(){
    navigator('/add-employee')
   }

   function updateEmployee(id){
    navigator(`/edit-employee/${id}`)
   }

   function removeEmployee(id){
    console.log(id)
    deleteEmp(id).then((response)=>{
        getAllEmployee()
    }).catch((err)=>{
        console.error(err)
    })
   }

  return (
    <>
    
    <div className='container'> 
       <h2 className='text-center'>List of Employees</h2>
       <button className='btn-clipboard' title ="click to add employees" onClick={addEmployee} style={{marginBottom:'10px'}}>Add Employees</button>  
       <table className='table table-success table-striped table-hover'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee=>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button type='button' className='btn  btn-outline-success' onClick={()=>updateEmployee(employee.id)}>Update</button>
                                <button type='button' className='btn  btn-outline-success' onClick={()=>removeEmployee(employee.id)}
                                style={{marginLeft:'10px'}}
                                >Delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
       </table>
    </div>
    </> 
  )
}

export default ListEmployeeComponent;
