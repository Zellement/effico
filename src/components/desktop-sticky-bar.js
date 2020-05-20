import React from "react"
import PhoneNumber from "../components/atoms/phone-number"
import Email from "../components/atoms/email"
import ReactCountryFlag from "react-country-flag"

const DesktopStickyBar = () => (
  <div className="fixed top-0 left-0 right-0 z-50 hidden w-full bg-gray-900 md:block">
    <div className="container text-white md:flex md:flex-row md:justify-end">

    <span className="inline-block my-auto mr-4">Contact us today on</span>
    <PhoneNumber className="inline-block p-2 mr-4 text-center text-white hover:text-green-light" />
    <Email className="inline-block p-2 mr-4 text-center text-white hover:text-green-light" />
    <div className="flex flex-row justify-center w-auto py-2">
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

    </div>

  </div>
)

export default DesktopStickyBar
