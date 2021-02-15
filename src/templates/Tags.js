import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`
  return (
    <Layout>
    <div>
      <h2>{tagHeader}</h2>

      {edges.map(({ node }) => {
          const { slug } = node.fields

          return (
          <div className = "guide">
          <article
            key={slug}
            itemScope
            itemType="http://schema.org/Article"
          >
            <time>{node.frontmatter.date}</time>
            <h2><Link to={`/blog/${slug}`}>{node.frontmatter.title}</Link></h2>
            <p>{node.frontmatter.description}</p>
          </article>
        
        </div>
        )
      })}
    </div>
    </Layout> 
  )
}
Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`