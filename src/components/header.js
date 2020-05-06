import React from "react"
import Logo from '../components/atoms/logo'

import Nav from '../components/nav'

const Header = () => (
  <header className="container md:flex md:flex-col lg:flex-row md:pt-8">

    <div className="flex p-6">
      <Logo className="block w-40 mx-auto" />
    </div>

    <div className="hidden my-4 md:ml-auto md:mt-2 md:block"><Nav /></div>

  </header>
)

export default Header
