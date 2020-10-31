import React from "react"
import { Link } from 'gatsby'

export default function Header() {
    return(
    <nav className="navbar">
      <div className="container">
        <div className="flex">
          
          <div>
                <Link to="/" className="brand">Akarsh Singh</Link>
          </div>

            <div className="flex">
                <Link to="/blog">Blog</Link>
                <Link to="/resume">Resume</Link>
            </div>
        </div>
     </div>
    </nav>      
    )
}