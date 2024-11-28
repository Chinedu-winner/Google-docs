import React from 'react'
import axios from 'axios'
import {useNavigator} from 'react-dom'

const Signin = ()=>{
    const [email, setemail] = useState("")
    let url = ''
    const [password, setpassword] = useState("")
    const signin = () =>{
      axios.post(url, {email, password})
      .then ((response) =>{
        if (!response.data.status){
            console.log( response.data.message);           
        }else {
          navigate('/Component')
        }
      })
    }

function school() {
  return (
    <>
      {/* <App/> */}
      <h1></h1>
    </>
  )
}
}

export default school