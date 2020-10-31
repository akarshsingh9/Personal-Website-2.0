import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"

const BlogIndex = ({ data }) => {
  //const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
  <Layout>
    <h2>All Posts</h2>
    {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article
            key={node.fields.slug}
            itemScope
            itemType="http://schema.org/Article"
          >
            <time>{node.frontmatter.date}</time>
            <p><Link to={node.fields.slug}>{title}</Link></p>
          </article>
        )
      })}
  </Layout>
  )
  //{node.frontmatter.description} {node.frontmatter.tags}
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`

export default BlogIndex