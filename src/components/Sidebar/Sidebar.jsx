import React from 'react'

import './Sidebar.css'

export default function Sidebar() {
  return (
    <>
        <div className="sidebar_container">
           <div>
                <i className="fa-solid fa-house"></i>
                <small>Home</small>
           </div>
           <div>
                <i className="fa-brands fa-youtube"></i>
                <small>Videos</small>
           </div>
           <div>
                <i className="fa-solid fa-gamepad"></i>
                <small>Gaming</small>
           </div>
           <div>
                <i className="fa-solid fa-radio"></i>
                <small>Podcast</small>
           </div>
            
            
        </div>
    </>

  )
}
