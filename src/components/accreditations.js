import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Accreditations = ({ className }) => {
  const data = useStaticQuery(graphql`
    query AccsQ {
      datoCmsOption{
        accreditations {
          title
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  `)

  return (
    <>
      {data.datoCmsOption.accreditations.map((imageData) => (
        <div className={className} key={imageData.title}>
          <Img fluid={imageData.fluid} className="block w-full" />
        </div>
      ))}
    </>
  )
}

export default Accreditations
