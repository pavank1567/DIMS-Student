import React from 'react'
import { useEffect, useState } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import { cls } from './ClassList'
import './StudentList.css'
import student from './images/img1.png'

var id;
export const StudentList = () => {
  const [stuList, setStuList] = useState([])
  useEffect(() => {
    Axios.get('http://localhost:5000/showStudents').then((response) => {
      setStuList(response.data)
    })
  }, [])

  const setId=(item)=>{
      id=item
  }

  return (
    <>
      <div className='grid-container'>
        {
          stuList.map((val) => {
            if (cls === val.class) {
              return (
                <>
                    <div className="card mb-4" style={{maxWidth:"390px"}}>
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img src={student} className="img-fluid rounded-start" alt=""/>
                        </div>
                        <div className="col-md-7">
                          <div className="card-body">
                            <h5 className="card-name">{val.name}</h5>
                            <h5 className="card-id">{val.id}</h5>
                            <div id="card-btn"><Link to="/stuProfile" className="btn btn-primary" onClick={()=>{setId(val.id)}}>More..</Link></div>
                          </div>
                        </div>
                      </div>
                      

                    </div>
                </>
              )
            }
            else
              return null

          })
        }
      </div>
    </>
  )
}
export {id}