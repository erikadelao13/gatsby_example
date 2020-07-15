import React from "react"
import "../css/app.css"

const Character = ({ pageContext: { person } }) => {
  console.log("this is person:", person)
  return (
    <div className="w-full bg-teal-500 h-screen items-center justify-center flex text-white font-sans">
      <div className="container">
        <h1 className="text-4xl uppercase my-6 font-bold"> {person.name} </h1>
        <p className="text-2xl">Character info</p>
      </div>
    </div>
  )
}

export default Character
