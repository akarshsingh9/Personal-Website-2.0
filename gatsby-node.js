const path = require("path")

exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === "MarkdownRemark") {

        const slug =  node.frontmatter.slug
      
        createNodeField({ 
             node,
             name: "slug",      
             value: slug,    
        })  

    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
  
    const blogPost = path.resolve(`./src/templates/BlogPost.js`)
    //tags template
    const tagTemplate = path.resolve("./src/templates/Tags.js")
  
    const result = await graphql(
      `
        {
          allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 1000
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                  tags
                }
              }
            }
          }
          tagsGroup: allMarkdownRemark(limit: 2000) {
            group(field: frontmatter___tags) {
              fieldValue
            }
          }
        }
      `
    )
  
    if (result.errors) {
      throw result.errors
    }
  
    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges
  
    posts.forEach((post, index) => {
      //order is desc therefore logic prev next reverses
      //const previous = index === 0 ? null : posts[index - 1].node
      //const next = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
  
      createPage({
        path: "blog/"+ post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })
  
    // Extract tag data from query
    const tags = result.data.tagsGroup.group
    // Make tag pages
    tags.forEach(tag => {
      createPage({
        path: `/tags/${tag.fieldValue}/`,
        component: tagTemplate,
        context: {
          tag: tag.fieldValue,
        },
      })
    })

}
