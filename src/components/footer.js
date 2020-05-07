import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PhoneNumber from "../components/atoms/phone-number"
import Email from "../components/atoms/email"
import ReactCountryFlag from "react-country-flag"
import Accreditations from "../components/accreditations"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQ {
      datoCmsOption {
        vatNumber
        registrationNumber
      }
    }
  `)
  return (
    <div className="container sm:flex sm:flex-row sm:flex-wrap sm:pt-8">
      <div className="flex flex-row justify-center w-auto my-8 sm:m-0 sm:mr-4">
        <ReactCountryFlag
          countryCode="GB"
          style={{
            fontSize: "1.4em",
            lineHeight: "2em",
            marginRight: "2px",
            marginTop: 'auto',
            marginBottom: 'auto'
          }}
          svg
        />
        <ReactCountryFlag
          countryCode="PL"
          style={{
            fontSize: "1.4em",
            lineHeight: "2em",
            marginTop: 'auto',
            marginBottom: 'auto'
          }}
          svg
        />
      </div>

      <PhoneNumber className="block my-auto mr-4 text-gray-700 hover:text-green-light" />
      <Email className="block my-auto mr-4 text-gray-700 hover:text-green-light" />
      
      <div className="flex max-w-sm my-4 md:ml-8">
      <Accreditations className="block w-12 p-1 my-auto" />
      </div>

      <p className="w-full mt-4 text-gray-400">
        Effico Ltd. are a registered company in England &amp; Wales &bull;
        Registration Number {data.datoCmsOption.registrationNumber} &bull; VAT
        Number {data.datoCmsOption.vatNumber}
      </p>
    </div>
  )
}
export default Footer
