import React from 'react'
import './List.css'
import { Link } from 'react-router-dom'


var year;
export default function List() {

    const updateYear=(val)=>{
        year=val
        
    }

    return (
        <>
        <div id="container">
            <div id="container1">
                <Link to="/classList" id="link" >
                    <div id="e1" className="year-card" onClick={()=>{updateYear(1)}}>
                        E1
                    </div>
                </Link>
                <Link to="/classList" id="link" >
                    <div id="e2" className="year-card" onClick={()=>{updateYear(2)}}>
                        E2
                    </div>
                </Link>
            </div>
            <div id="container2">
                <Link to="/classList" id="link" >
                    <div id="e3" className="year-card" onClick={()=>{updateYear(3)}}>
                        E3
                    </div>
                </Link>
                <Link to="/classList" id="link">
                    <div id="e4" className="year-card" onClick={()=>{updateYear(4)}}>
                        E4
                    </div>
                </Link>
            </div>
        </div>

        </>
        
    )
    
}
export {year}
