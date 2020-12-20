import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export default function Sidebar({ post }) {
    const { tags, thumbnail } = post.frontmatter
  
    return (
      <aside>
        <div className="aside-content">
          
          <section>
            <h3>Support</h3>
            <p>
              If you like what I do and would like to support me, you can do so
              below!
            </p>
            <a
              href="https://ko-fi.com/taniarascia"
              target="_blank"
              rel="noreferrer"
              className="kofi"
            >
              {/* <img src={kofi} alt="Patreon" /> <span>Buy me a coffee</span> */}Kofi
            </a>
            <a
              href="https://patreon.com/taniarascia"
              target="_blank"
              rel="noreferrer"
              className="patreon"
            >
              {/* <img src={patreon} alt="Kofi" /> <span>Become a Patron</span> */}Patreon
            </a>
          </section>
        </div>
      </aside>
    )
  }