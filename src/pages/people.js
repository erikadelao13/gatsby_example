import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  {
    allStarwarsPeople {
      edges {
        node {
          results {
            name
          }
        }
      }
    }
  }
`
const SecondPage = ({ data }) => (
  <Layout>
    <SEO title="Page two" />
    <h1>People</h1>
    {data.allStarwarsPeople.edges[0].node.results.map(items => (
      <p>{items.name}</p>
    ))}
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
