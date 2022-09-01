import React from 'react'
import symbol from './images/login.png'
import { Link } from 'react-router-dom'
import './Login.css'
import Axios  from 'axios'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
export const Login = () => {

  let navigate=useNavigate();
  const [id, setId] = useState("")
  const [pwd,setPwd]=useState("")
  const stud={
    id:id,
    paswd:pwd
  }
  const validate=()=>{
    Axios.post('http://localhost:5000/validatePswd',stud).then((response)=>{
          // console.log(stud.id)
          // console.log(stud.paswd)
          // console.log(response)
          // console.log(response.data)
          var div=document.getElementById('alert')
          if(stud.paswd===response.data){
            console.log("Valid")
            navigate('/editProfile')
          }
          else{
            console.log("Invalid password")
            div.style.display = "block";
            setTimeout(function(){div.style.display = "none";},3000);
          }
         })
  }
  return (
    <>
    <div className="alert alert-danger" role="alert" id="alert" style={{display:"none"}}>
          Invalid Login!
    </div>
    <div className='cont'>
      <div className="login-container">
          <div id="sin-img"> 
              <img src={symbol} alt=""/>
          </div>
          <div id="sin">Sign in</div>
          <input type="text" placeholder="ID Number" className="ip" onChange={(event)=>{setId(event.target.value)}}/>
          <input type="password" placeholder="Password" className="ip" onChange={(event)=>{setPwd(event.target.value)}}/>
          <button type="submit" id="login" onClick={validate} >Login</button>
          <div id="forgot">
              <Link to="/forgot">Forgot password</Link>
          </div>
      </div>
    </div>
    </>
  )
}
