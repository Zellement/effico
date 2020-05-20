import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PhoneNumber from "../components/atoms/phone-number"
import Email from "../components/atoms/email"
import ReactCountryFlag from "react-country-flag"
import Accreditations from "../components/accreditations"
import {
  TiSocialLinkedin,
  TiSocialFacebook,
  TiSocialTwitter,
} from "react-icons/ti"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQ {
      datoCmsOption {
        vatNumber
        registrationNumber
        twitterUrl
        facebookUrl
        linkedinUrl
      }
    }
  `)
  return (
    <div className="container sm:flex sm:flex-row sm:flex-wrap sm:pt-8">
      <div className="flex flex-row justify-center w-auto my-8 sm:m-0 sm:mr-4">
        <ReactCountryFlag
          alt="UK flag"
          title="UK flag"
          aria-label="UK flag"
          countryCode="GB"
          style={{
            fontSize: "1.4em",
            lineHeight: "2em",
            marginRight: "2px",
            marginTop: "auto",
            marginBottom: "auto",
          }}
          svg
        />
        <ReactCountryFlag
          alt="Polish flag"
          title="Polish flag"
          aria-label="Polish flag"
          countryCode="PL"
          style={{
            fontSize: "1.4em",
            lineHeight: "2em",
            marginTop: "auto",
            marginBottom: "auto",
          }}
          svg
        />
      </div>

      <PhoneNumber className="block my-auto mr-4 text-gray-700 hover:text-green-light" />
      <Email className="block my-auto mr-6 text-gray-700 hover:text-green-light" />

      {data.datoCmsOption.linkedinUrl ? (
        <a
          class="my-auto text-xl"
          target="_blank"
          rel="noopener noreferrer"
          href={data.datoCmsOption.linkedinUrl}
        >
          <TiSocialLinkedin />
        </a>
      ) : null}

      {data.datoCmsOption.twitterUrl ? (
        <a
          class="my-auto text-xl"
          target="_blank"
          rel="noopener noreferrer"
          href={data.datoCmsOption.twitterUrl}
        >
          <TiSocialTwitter />
        </a>
      ) : null}

      {data.datoCmsOption.facebookUrl ? (
        <a
          class="my-auto text-xl"
          target="_blank"
          rel="noopener noreferrer"
          href={data.datoCmsOption.facebookUrl}
        >
          <TiSocialFacebook />
        </a>
      ) : null}

      <div className="flex max-w-sm my-4 md:ml-8">
        <Accreditations className="block w-12 p-1 my-auto" />
      </div>

      <p className="w-full mt-4 text-gray-400">
        Effico Ltd. are a registered company in England &amp; Wales &bull;
        Registration Number {data.datoCmsOption.registrationNumber} &bull; VAT
        Number {data.datoCmsOption.vatNumber}
      </p>

      <p className="mt-4">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400"
          href="https://www.zellement.com"
        >
          Web Design by Zellement
        </a>
      </p>
    </div>
  )
}
export default Footer
