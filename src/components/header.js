import React from "react"
import Nav from '../components/nav'
import Logo from '../components/atoms/logo'

const Header = () => (
  <header className="">

    <div className="flex p-4">
      <Logo className="block w-40 mx-auto" />
    </div>

    <Nav />

  </header>
)

export default Header
