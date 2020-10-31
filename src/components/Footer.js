import React from "react"
import { Link } from 'gatsby'

export default function Footer() {
    return(
    <footer className="footer flex">
        <section className="container">
          <nav className="footer-links">
                <Link to="/blog">Blog</Link>
                <Link to="/resume">Resume</Link>
                <a href="\" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="\" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="\" target="_blank" rel="noopener noreferrer">RSS</a>
                <a href="\" target="_blank" rel="noopener noreferrer">Patreon</a>
                <a href="\" target="_blank" rel="noopener noreferrer">Ko-fi</a>
            </nav>
        </section>         
    </footer>
    )
}