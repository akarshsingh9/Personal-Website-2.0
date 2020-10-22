import React from "react"
import { Link } from 'gatsby'

export default function Header() {
    return(
    <header>
        <nav>
            <div>
                <Link to="/">Akarsh Singh</Link>
            </div>
            
            <div>
                <Link to="/blog">Blog</Link>
                <Link to="/resume">Resume</Link>
            </div>
        </nav>
    </header>
    )
}