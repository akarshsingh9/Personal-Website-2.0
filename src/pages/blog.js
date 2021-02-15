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
        const tags = node.frontmatter.tags || []
        return (
        <div className = "guide">
          <article
            key={node.fields.slug}
            itemScope
            itemType="http://schema.org/Article"
          >
            <time>{node.frontmatter.date}</time>
            <h2><Link to={node.fields.slug}>{title}</Link></h2>
            <p>{node.frontmatter.description}</p>
          {tags && (
            <div className="tags">
            {tags.map((tag) => (
              <Link
              key={tag}
              to={`/tags/${tag}`}
              className={`tag-${tag}`}>
                {tag}
              </Link>
              ))}
            </div>
          )}
          </article>

        </div>
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
            description
            tags
          }
        }
      }
    }
  }
`

export default BlogIndex