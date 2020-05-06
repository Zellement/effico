import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MdLocalPhone } from "react-icons/md"

const PhoneNumber = ({className}) => {
  const data = useStaticQuery(graphql`
    query PhoneNumberQ {
      datoCmsOption {
        telephone
      }
    }
  `)
  return <a className={className} href={"tel:" + data.datoCmsOption.telephone}><MdLocalPhone className="inline-block -mt-px" /> {data.datoCmsOption.telephone}</a>
}

export default PhoneNumber
