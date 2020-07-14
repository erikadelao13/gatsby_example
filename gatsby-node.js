exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const starWarsPeople = await graphql(`
    {
      allStarwarsPeople {
        edges {
          node {
            id
            results {
              name
              eye_color
            }
          }
        }
      }
    }
  `)
  starWarsPeople.data.allStarwarsPeople.edges[0].node.results.forEach(item => {
    createPage({
      path: `/personDetail/${item.name}`,
      component: require.resolve("./src/templates/personDetail.js"),
      context: { persons: item },
    })
  })
}
