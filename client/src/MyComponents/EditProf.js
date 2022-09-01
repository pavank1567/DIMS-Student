import React, { createElement } from 'react'
import './EditProf.css'
import { useState } from 'react'
export const EditProf = () => {
  const [name,setName]=useState("")
  const [ach,setAch]=useState([])
  console.log(ach)
  const addBlock=()=>{
    
      let ele = document.createElement('div');
      ele.id = "ach"
      ele.style={marginBottom:"10px"}
      let inp = document.createElement('textarea');
      inp.placeholder = "Enter Achievements"
      inp.rows="2"
      inp.cols="50"
      ele.appendChild(inp)
      document.querySelector('.edit').appendChild(ele)

  }
  return (
    <>
    <div className='main-container'>
    <div className='prof-container'>
      <div>
      <h4>Edit Profile</h4>
      </div>
      <div className='edit'>
        <div>Upload image</div><input type="file" alt=""/>
        <div>Full Name</div><input type="text" placeholder="Enter fullname" onChange={(e)=>{setName(e.target.value)}}/>
        <div>Achievements</div>
        <div id="ach" style={{marginBottom:"10px"}}>
          <textarea type="text" placeholder='Enter Achievements' rows="2" cols="50"></textarea>
          <button type="button" className="btn btn-sm btn-success" onClick={addBlock} >+</button>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
