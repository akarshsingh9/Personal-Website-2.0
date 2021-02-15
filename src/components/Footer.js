import React from "react"
import { Link } from 'gatsby'

export default function Footer() {
    return(
    <footer className="footer flex">
        <section className="container">
          <nav className="footer-links">
                <Link to="/blog">Blog</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/rss.xml">RSS</Link>
            </nav>
        </section>         
    </footer>
    )
}