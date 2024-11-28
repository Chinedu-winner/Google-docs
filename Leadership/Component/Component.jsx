import React from 'react'
import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import * as yup from 'yup'
import { useFormik } from 'formik'


const welcome = ()=>{
    const url = ''
    let navigate = useNavigate()
    const [message, setMessage]= useState("")
    const formik = useFormik({
        initialValues:{
            firstName: '',
            LastName: '',
            email: '',
            password: ''
        },

    onSubmit: (values)=>{
        console.log(values);
        axios.post(url, values)
        .then((response)=>{
            console.log(response);
            if (response.data.status){
                navigate('/login')
            }else{
                setMessage(response.data.message)
            }
        })
    }
    })
}
const userSchema =  yup.object({
    firstName: yup.string().required("first name is required"),
    lastName: yup.string().required("last name is required"), 
    email: yup.string().min(6, "Password muat be  at least 6  characters").required("Password is required"), 
    password: yup.string().min(5, 'password must be at least 6 characters').required("your password is required")
})


function Component() {
  return (
    <>
        <div className='container-fluid bg-success mx-auto mt-lg-5 mt-4 shadow ml-3 px-lg-4 py-3 px-4' > 
            <div className='d-flex g-3'>
            <div> 
                <label>
                    <p className='text-center text-decoration-underline'>First Name</p>
                    <input type="text" placeholder='First name' className='form-control form-control-sm shadow-none'/>
                </label>
            </div>
            <div>
                <label> 
                    <p className='text-center text-decoration-underline'>Second Name</p>
                    <input type="text"placeholder='Second name' className='form-control form-contol-sm w-100 shadow-none'/>
                </label>
            </div></div>
            <div className='d-flex'><div>
                <label>
                    <p className='text-center text-decoration-underline'>Email</p>
                    <input type="Email" placeholder='email'  className='w-100 shadow-none rounded'/>
                </label> 
            </div>
            <div> 
                <label> 
                    <p className='text-center text-decoration-underline'>Password</p>
                    <input type="password" placeholder='password' className='form-control w-100 shadow-none'/>
                </label>
                <button className='btn btn-danger btn-sm w-100 my-1  my-2 btn-1'>Started</button>
            </div>
            </div>
        </div>
    </>
  )
}

export default Component 