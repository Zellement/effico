import React from "react"
import Nav from "../components/nav"
import PhoneNumber from "../components/atoms/phone-number"
import ReactCountryFlag from "react-country-flag"

const MobileStickyBar = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 flex flex-row justify-between bg-gray-700 md:hidden">
    <div className="flex flex-row justify-center w-auto px-6 py-2">
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

    <PhoneNumber className="flex-grow inline-block w-6/12 p-2 text-center text-white bg-green" />

    <Nav />
  </div>
)

export default MobileStickyBar
