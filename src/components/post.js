import React from "react"
import { Link } from "gatsby"

const PostItem = ({posts, IsHomePage}) => {
  const blogListHeader = IsHomePage ? "Latest Articles" : "Articles"
    return (
      <div>
        <div>
        <h2>{blogListHeader}</h2>
        <Link to="/blog/"><button type="button" hidden={!IsHomePage}>View All</button></Link>
        <hr/>
        </div>
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.frontmatter.slug
          const linkPrefix = "/blog/"
          const blogLink = IsHomePage ? linkPrefix.concat(post.frontmatter.slug) : post.frontmatter.slug

          return (
            <li key={post.frontmatter.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={blogLink} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
      </div>
    )
}

export default PostItem