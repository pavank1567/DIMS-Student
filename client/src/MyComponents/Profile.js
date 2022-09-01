import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Profile.css'
import { id } from './StudentList2'
import  Axios  from 'axios'
import { useEffect } from 'react'

export const Profile = () => {
  const [stuDet,setStuDet]=useState([])
  const student={
    id:id
  }
  useEffect(() => {
    Axios.post('http://localhost:5000/studDet',student).then((response) => {
      setStuDet(response.data)
      console.log(stuDet)
    })
  }, [])
  
  
  return (
    <>
      {stuDet.map((val)=>{
      return(<>
      <div className="body-container">
        <div className="image-card">
          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150"/>
            <h4>{id}</h4>
            <div>{val.name}</div>
        </div>
        <div className="col-md-8" id="det-card">
          <div className="card mb-3">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Full Name</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {val.name}
                </div>
              </div>
              <hr/>
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Email</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {val.email}
                </div>
              </div>
              <hr/>
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Class</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {val.class}
                </div>
              </div>
              <hr/>
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Achievements</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  some Achievements
                </div>
              </div>
              <hr/>
              <div className="row">
                <div className="col-sm-12">
                  <Link className="btn btn-info "
                    to="/login">Edit</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>)
      })}
       </>
              )
            
}
