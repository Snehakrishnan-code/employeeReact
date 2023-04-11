import React from 'react'
import Table from 'react-bootstrap/Table';
import employee from './Employee';
import Button from 'react-bootstrap/Button';
import { Link,useNavigate } from 'react-router-dom';

function Home() {

  let history=useNavigate()

  const handleDelete=(id)=>{
    // alert('clicked')
   let index= employee.map(item=>item.id).indexOf(id)
   employee.splice(index,1)
   history('/')
  }

  const handleEdit=(id,uname,age,desig,sal)=>{
    localStorage.setItem("id",JSON.stringify(id))
    localStorage.setItem("uname",uname)
    localStorage.setItem("age",JSON.stringify(age))
    localStorage.setItem("desig",desig)
    localStorage.setItem("sal",JSON.stringify(sal))   // in loacl storage we store data in json format only (key value pair)
  }




  return (
    <>
    <h1 className='text-center p-5 text-success'>Employee Management System</h1>
    <div className='text-center'>
   <p className='text-center p-3 fs-5'> We have below our employee details managed by the higher authority of the company. This management system is easy editable. You can perform actions such as - Add, Edit and Delete employee details.</p>

   <Link to={'/add'}>
   <Button variant="outline-success">Add New Employee <i class="fa-solid fa-user-plus"></i></Button>
   </Link>

   
    <Table striped bordered hover style={{margin:'7rem', width:"85%"}}>
            
            <thead>
                <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Designation</th>
                        <th>Salary</th>
                        <th>Actions</th>
                </tr>
            </thead>

            <tbody>
               {
                employee && employee.length>0?
                employee.map(item=>(
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.desig}</td>
                        <td>{item.sal}</td>
                        <td>
                          <Link to={'/edit'}>
                          <Button onClick={()=>handleEdit(item.id,item.name,item.age,item.desig,item.sal)} className='ms-2 me-4'  variant="info"><i class="fa-solid fa-user-pen"></i></Button> 
                          </Link>

                          
                          <Button onClick={()=>handleDelete(item.id)} variant="danger"><i class="fa-solid fa-trash-can"></i></Button>
                          
                        </td>
                    </tr>
                )): 'no table data'
               }
            </tbody>

            </Table>
    </div>
    </>
  )
}

export default Home