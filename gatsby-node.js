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
