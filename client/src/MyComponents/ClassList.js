import React from 'react'
import {useState,useEffect} from 'react'
import Axios from 'axios'
import './ClassList.css'
import { year } from './List'
import { Link } from 'react-router-dom'

var cls;
export const ClassList = () => {

  const [classList, setClassList] = useState([])

  const setCls=(item)=>{
    cls=item;
  }

  useEffect(()=>{
       Axios.get('http://localhost:5000/showClasses').then((response)=>{
          setClassList(response.data) 
         })
  },[])
  return (
    <>
      {/* <button type='button' className='btn btn-sm btn-primary' onClick={showList}>Click</button> */}
      <div className='container'>
      {
        classList.map((val)=>{
          if(val.year===year){
          return(
            <>
            <Link to="/stuList" id="stu-link" onClick={()=>{setCls(val.classes)}}>
             <div className="cls-details" >
              <div >{val.classes}</div>
            </div> 
            </Link>
            </>
          )}
          else
            return null

        })
      }
      </div>

    </>
  )
}
export {cls};