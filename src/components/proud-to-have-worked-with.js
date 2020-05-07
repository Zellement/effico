import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ProudToHaveWorkedWith = ({ className }) => {
  const data = useStaticQuery(graphql`
    query WorkedWithQ {
      datoCmsOption(id: { eq: "DatoCmsOption-4652040-en" }) {
        workedWith {
          filename
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  `)

  return (
    <>
      {data.datoCmsOption.workedWith.map((imageData) => (
        <div className={className} key={imageData.filename}>
          <Img fluid={imageData.fluid} className="block w-full h-full" />
        </div>
      ))}
    </>
  )
}

export default ProudToHaveWorkedWith
