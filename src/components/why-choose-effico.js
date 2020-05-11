import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { GoQuote } from "react-icons/go"

const WhyChooseEffico = ({className}) => {
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
      <div className={className + " flex flex-row bg-gray-200 border-white border-solid shadow-lg border-10"}>
        <div className="flex w-8/12 p-8">
          <div className="m-auto">
            <h2>{data.datoCmsOption.quoteTitle}</h2>
            <div className="flex">
              <div className="hidden sm:block">
                <GoQuote className="pr-2 text-gray-400 md:text-4xl" />
              </div>
              <p className="font-display">{data.datoCmsOption.quote}</p>
            </div>
            <p className="mt-4 font-bold">{data.datoCmsOption.quoteName}</p>
          </div>
        </div>
        <Img
          fluid={data.datoCmsOption.quoteImage.fluid}
          className="w-4/12 ml-1 opacity-25 sm:opacity-100"
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
