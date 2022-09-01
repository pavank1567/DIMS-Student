import React from 'react'

export default function Footer() {
    let footerStyle={
        background:"#8c1515",
        position:"fixed",
        bottom:"0",
        height:"50px",
        width:"100%",
        textalign:"center",
        color:"white",

    }
  return (
     <>
        <div style={footerStyle}>
            <div><center><p>Copyright &copy; CSE | RGUKT-Basar. All Rights Reserved. Contact Us: +91 80081 55105</p></center></div>
        </div>

    </>
  )
}
