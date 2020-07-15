exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const dataCharacters = await graphql(`
    {
      allStarwarsPeople {
        edges {
          node {
            results {
              name
              homeworld
              species
              birth_year
              films
              gender
            }
          }
        }
      }
    }
  `)
  createPage({
    path: "/characters",
    component: require.resolve("./src/templates/characters"),
  })
  dataCharacters.data.allStarwarsPeople.edges[0].node.results.forEach(item => {
    createPage({
      path: `/characters/${item.name}`,
      component: require.resolve("./src/templates/character"),
      context: { person: item },
    })
  })
}
