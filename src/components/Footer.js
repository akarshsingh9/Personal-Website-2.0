import React from "react"
import { Link } from 'gatsby'

export default function Footer() {
    return(
    <footer>
        <nav>
            <div>
                <Link to="/blog">Blog</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <a href="\">Twitter</a>
                <a href="\">GitHub</a>
                <a href="\">RSS</a>
                <a href="\">Patreon</a>
                <a href="\">Ko-fi</a>
            </div>
        </nav>
        <p>Made with <span>Love</span> by <Link to="/">Akarsh Singh</Link></p>
    </footer>
    )
}