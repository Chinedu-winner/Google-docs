import React from 'react'

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