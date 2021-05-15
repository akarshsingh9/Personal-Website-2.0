import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PostItem from "../components/post"

const BlogPostItems = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const posts = data.allMarkdownRemark.nodes
  
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <PostItem posts={posts} IsHomePage={false} />
      </Layout>
    )
  }

export default BlogPostItems

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          slug
          description
        }
      }
    }
  }
`