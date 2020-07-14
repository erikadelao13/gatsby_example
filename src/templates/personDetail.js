import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ pageContext: { persons } }) => {
  return (
    <Layout>
      <SEO title="Person Detail" />
      <h1>{persons.name}</h1>
      <p>eye color: {persons.eye_color}</p>
      <Link to="/">Back to home</Link> <br />
    </Layout>
  )
}

export default IndexPage
