import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Sidebar from "../components/Sidebar"

const BlogPost = ({ data, pageContext }) => {
    const post = data.markdownRemark
    
    //load tags
    const tags = post.frontmatter.tags || []
    
    //prev and next post
    const  previous = pageContext.previous ? {
      url: `/blog/${pageContext.previous.fields.slug}`,
      title: pageContext.previous.frontmatter.title
   } : null
    
    const next = pageContext.next ? {
        url: `/blog/${pageContext.next.fields.slug}`,
        title: pageContext.next.frontmatter.title
    } : null 
  
    return (
        <Layout>
          <div className="container">
            <article>
              <header className="article-header">
                <div className="container">
                <div>
                  <h1>{post.frontmatter.title}</h1>
                  <div className="post-meta">
                    <div>
                      By <Link to="/">Akarsh Singh</Link> on{' '}
                      <time>{post.frontmatter.date}</time>
                    </div>
                    {tags && (
                      <div className="tags">
                        {tags.map((tag) => (
                          <Link
                            key={tag}
                            to={`/tags/${tag}`}
                            className={`tag-${tag}`}
                          >
                            {tag}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                </div>
              </header>
              <div className="article-post" itemProp="articleBody" dangerouslySetInnerHTML={{ __html: post.html }} />
            </article>
          </div>   
          <Sidebar post={post} />

        <nav className="flex container suggested">
          {previous && (
            <Link to={previous.url} rel="prev">
              <span>Previous</span>
              {previous.title}
            </Link>
          )}
          {next && (
            <Link to={next.url} rel="next">
              <span>Next</span>
              {next.title}
            </Link>
          )}
        </nav>
        </Layout>
    )
}
export default BlogPost

export const pageQuery = graphql`
  query BlogPost($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        description
      }
    }
  }
`
