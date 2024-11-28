import React from 'react'
import * as yup from 'yup'
import { formik} from 'formik'

const dashboard = () =>{
  let initialValue = {
    title: '',
    note:''
  }
}

const Mineral =()=> {
  return (
    <Formik
    initialValue = {initialValue}
    validateSchema = {userSchema}
    onSubimt = {(values, {setSubmitting})=>{
      console.log(values);
      setSubmitting(false)
    }}> 
    {(({handleChang, values, error, handleSubmit, isSubmitting})=>{
      <form>
        <div className='form-control w-100 rounded ml-3'>  
          <input type="text" placeholder="Title" id="" />
        </div>
        <div> 
          <input type="text" placeholder='Note'/>
        </div>
    </form>
    })}
    </Formik>
  )}

export default Mineral