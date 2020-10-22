import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

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
            <article itemScope itemType="http://schema.org/Article">
            <header>
              <h1>{post.frontmatter.title}</h1>
              <p>
                {post.frontmatter.date}
              </p>
            </header>
            <section
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
            />
            <hr/>
            </article>
            
            <div>
                tags:
                <ul>
                    {tags.map(t => (
                    <li key={t}>
                        <Link to={`/tags/${t}`}>{t}</Link>
                    </li>
                    ))}
                </ul>
            </div>
            
            <div>
                {previous && (<Link to={previous.url}>
                    <span>Previous</span>
                    <h3>{previous.title}</h3>
                    </Link>
                    )}
                    
                {next && (<Link to={next.url}>
                    <span>Next</span>
                    <h3>{next.title}</h3>
                    </Link>
                    )}
            </div>
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
      }
    }
  }
`
