import React from 'react'
import './Home.css'
import student from './student.png'

export default function Home() {
  return (
    <div id="container">
    <a href="/list" id="link">
      <div id="list-card">
        <div id="card-img">
          <img src={student} alt=""/>
          <div id="card-text">
            <p>Students List</p>
          </div>
        </div>
      </div>
    </a>
  </div>
  )
}
