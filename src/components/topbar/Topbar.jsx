import React from 'react'
import {Link} from 'react-router-dom'
import './topbar.css'

export default function TopBar() {
  
  return (
    <div className='top'>
        <div className="topcenter">
            <ul className="toplist">
                <li className="toplistitems"><Link className='link' to="/">Home</Link></li>
                <li className="toplistitems"><Link className='link' to="/">About</Link></li>
                <li className="toplistitems"><Link className='link' to="/">Contact</Link></li>
                
            </ul>
        </div>
    </div>
  )
}
