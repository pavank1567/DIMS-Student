import React from 'react'
import { useState } from 'react'
import { cls } from './ClassList'
import Axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

var id;
export const StudentList2 = () => {
    const [stuList, setStuList] = useState([])
    useEffect(() => {
        Axios.get('http://localhost:5000/showStudents').then((response) => {
          setStuList(response.data)
        })
      }, [])
    const setId=(item)=>{
        id=item
        console.log(id)
        console.log(cls)
    }
    
    return (
    <>
    <table id="example" className="table table-striped table-bordered" style={{width:"100%"}}>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
        {
          stuList.map((val) => {
            if (cls === val.class) {
              return (
                <>
                    <tr>
                        <td>{val.id}</td>
                        <td>{val.name}</td>
                        <td><Link to="/stuProfile" className="btn btn-primary" onClick={()=>{setId(val.id)}}>More..</Link></td>
                    </tr>
                </>
              )
            }
            else
              return null

          })
        }
        </tbody>
    </table>
    
    </>
  )
}
export {id}
