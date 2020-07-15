import React from "react"
import "../css/app.css"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

const Characters = () => {
  const queryData = useStaticQuery(graphql`
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
  const renderList = queryData.allStarwarsPeople.edges[0].node.results.map(
    (item, index) => {
      return (
        <Link
          to={`/characters/${item.name}`}
          className="text-white"
          key={`key-${index + 1}`}
        >
          <li> {item.name} </li>
        </Link>
      )
    }
  )
  return (
    <div className="w-full bg-teal-500 h-screen items-center justify-center flex text-white">
      <div className="container">
        <h1 className="text-4xl uppercase my-6 font-bold">Characters</h1>
        <h2 className="text-2xl">Select a character</h2>
        <ul className="text-base mt-4 font-sans">
          <li> {renderList} </li>
        </ul>
      </div>
    </div>
  )
}

export default Characters
