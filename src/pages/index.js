import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  {
    allStarwarsPlanets {
      edges {
        node {
          results {
            name
            residents
          }
        }
      }
    }
  }
`
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Planets</h1>
      {data.allStarwarsPlanets.edges[0].node.results.map(items => (
        <p>{items.name}</p>
      ))}
      <Link to="/people/">Go to page 2</Link> <br />
    </Layout>
  )
}

export default IndexPage
