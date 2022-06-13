const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // query content for WordPress posts
  const {
    data: {
      allWpTjanst: { nodes: allServicePages },
    },
  } = await graphql(`
    query {
      allWpTjanst {
        nodes {
          id
          uri
        }
      }
    }
  `)

  const servicePageTemplate = path.resolve(
    `./src/templates/service-page-template.js`
  )

  allServicePages.forEach(page => {
    createPage({
      // will be the url for the page
      path: page.uri,
      // specify the component template of your choice
      component: slash(servicePageTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: page.id,
      },
    })
  })
}
