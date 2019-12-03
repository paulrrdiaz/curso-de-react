const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogLayout = path.resolve('src/layouts/Blog.js')
  const { data: {allMdx : { edges: posts}} } = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              slug
              title
            }
            body
          }
        }
      }
    }
  `);

  posts.forEach(post => {
    createPage({
      path: post.node.frontmatter.slug,
      component: blogLayout,
      context: {
        title: post.node.frontmatter.title,
        body: post.node.body
      }
    })
  })
}