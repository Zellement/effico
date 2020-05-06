import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FaEnvelope } from "react-icons/fa"

const Email = ({className}) => {
  const data = useStaticQuery(graphql`
    query EmailQ {
      datoCmsOption {
        emailAddress
      }
    }
  `)
  return <a className={className} href={"mailto:" + data.datoCmsOption.emailAddress}><FaEnvelope className="inline-block -mt-px" /> {data.datoCmsOption.emailAddress}</a>
}

export default Email
