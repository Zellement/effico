exports.createPages = async function({ actions, graphql }) {
    const { data } = await graphql(`
    query PagesQuery {
      allDatoCmsPage {
        edges {
          node {
            slug
          }
        }
      }
      allDatoCmsRecentProject {
        edges {
          node {
            slug
          }
        }
      }
    }
     
    `)
    data.allDatoCmsPage.edges.forEach(edge => {
      actions.createPage({
        path: edge.node.slug + '/',
        component: require.resolve(`./src/templates/page.js`),
        context: { slug: edge.node.slug },
      })
    })
    data.allDatoCmsRecentProject.edges.forEach(edge => {
      actions.createPage({
        path: '/recent-projects/' + edge.node.slug + '/',
        component: require.resolve(`./src/templates/project.js`),
        context: { slug: edge.node.slug },
      })
    })
  }
  