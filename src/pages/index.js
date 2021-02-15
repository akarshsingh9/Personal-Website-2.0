import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from "../components/Layout"
import SoftareProjects from "../../content/data/software-projects.yaml"
import WorkExp from "../../content/data/professional-career.yaml"
import AkarshImg from "../../content/assets/akarsh.jpg"

export const latestBlogPost = graphql`
query {
  allMarkdownRemark(limit: 6, sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        frontmatter {
          date
          description
          slug
          tags
          title
        }
      }
    }
  }
}
`

export default function Home({ data }) {
  const latest = data.allMarkdownRemark.edges
  return( 
    <Layout>
      <section className="intro">
      <img src={AkarshImg} alt="Akarsh's Pic" className="image"/>
      <div>
      <h2>Hi, I'm Akarsh</h2>
      <p>
      Software Engineer & Content Writer
      Welcome to my personal website, where I drop notes and articles about things that I am interested in. There are no ads, sponsored posts, sign up for newsletter crap. Enjoy this clean and uncluttered space on the Internet. 
      </p>
      </div>
      </section>      
      
    <div>
    <h2>Latest in Blog <Link className="section-button" to="/blog">Read more articles</Link></h2>
      
      {latest.map(({ node }) => {
        const title = node.frontmatter.title
        const slug = node.frontmatter.slug
        const blogSlug = `blog/${slug}`
        return (
          <article
            key={slug}
            itemScope
            itemType="http://schema.org/Article"
          >
            <time>{node.frontmatter.date}</time>
            <p><Link to={blogSlug}>{title}</Link></p>
          </article>
        )
      })}
    </div>
      
    <section className="Projects">
      <h2>Software Projects <Link className="section-button" to="https://github.com/akarshsingh9">View more projects on GitHub</Link></h2>
      <div className="projects">
        {SoftareProjects.map((data, index) => {
          return (
            <div className="project" key = {`projects_${index}`}>
              <div>
                <a href={data.url} target="_blank" rel="noreferrer">
                <div className="icon"> {data.icon} </div>
                <h3>{data.name}</h3>
                </a>
                <div className="description">{data.description}</div>
              </div> 
            </div> 
          )     
        })}
      </div>
    </section>

    <div>
      <h2>Work Experience</h2>
      <ul>
        {WorkExp.map((data,index) => {
          return <li key = {`work_experience_${index}`}>{data.name} {data.profile} {data.year}</li>
        })}
      </ul>
    </div>

    </Layout>
  )
}

