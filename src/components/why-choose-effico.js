import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WhyChooseEffico = () => {
  const data = useStaticQuery(graphql`
    query WhyChooseQ {
      datoCmsOption(id: { eq: "DatoCmsOption-4652040-en" }) {
        quoteName
        quote
        quoteTitle
        quoteImage {
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="flex flex-row border-white border-solid border-10">
        <div className="w-8/12 p-8 xl:p-12">
          <h2>Why Choose Effico?</h2>
          <p>{data.datoCmsOption.quote}</p>
          <p>
            {data.datoCmsOption.quoteName}, {data.datoCmsOption.quoteTitle}
          </p>
        </div>
        <Img
          fluid={data.datoCmsOption.quoteImage.fluid}
          className="w-4/12 ml-1 opacity-25 sm:opacity-100 md:opacity-25 lg:opacity-100"
          imgStyle={{
            objectFit: "cover",
            objectPostion: "center",
          }}
        />
      </div>
    </>
  )
}

export default WhyChooseEffico
