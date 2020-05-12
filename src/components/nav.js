import React from "react"
import { Link } from "gatsby"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoMdCloseCircleOutline } from "react-icons/io"

const Nav = class extends React.Component {

  state = { showMenu : false }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }
 
  render() {
    const menuActive = this.state.showMenu ? 'is-active' : '';
    // const burgerActive = this.state.showMenu ? 'is-active' : '';
    return (     
    <nav className="relative w-3/12 md:w-full lg:flex lg:content-end lg:justify-end lg:flex-col">
      <div className={`lg:mt-5 navigation-wrapper navigation-wrapper--${menuActive}`} >
        <span className="absolute top-0 right-0 z-20 p-2 text-3xl md:hidden" onClick={this.toggleMenu} onKeyDown={this.toggleMenu}><IoMdCloseCircleOutline /></span>
        <ul className="md:bg-red md:flex md:w-full md:flex-row md:justify-start md:items-stretch lg:justify-end">
          <li className="navigation-wrapper__list-item">
            <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/domestic-electrical-services/"><span className="lg:block">Domestic</span> Electrical Services</Link>
          </li>
          <li className="navigation-wrapper__list-item">
            <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/commercial-electrical-services/"><span className="lg:block">Commercial</span> Electrical Services</Link>
          </li>
          <li className="navigation-wrapper__list-item">
            <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/telecommunications-utilities/"><span className="lg:block">Telecommunications</span> &amp; Utilities</Link>
          </li>
          <li className="navigation-wrapper__list-item">
            <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/led-lights-ev-chargers/"><span className="lg:block">LED Lights &amp;</span> EV Chargers</Link>
          </li>
          <li className="navigation-wrapper__list-item">
            <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/recent-projects/"><span className="lg:block">Recent</span> Projects</Link>
          </li>
          <li className="md:flex">
            <Link className="w-full h-full p-1 whitespace-no-wrap rounded-lg md:mx-2 md:flex md:flex-grow md:px-2 md:border-2 md:border-solid md:border-green hover:bg-green-light " onClick={this.toggleMenu} activeClassName="is-contact-active" to="/contact-us/"><span className="my-auto">Contact Us</span></Link>
          </li>
        </ul>
      </div>
      <div aria-label="Navigation menu button" tabIndex={0} role="button" className="block p-2 text-center text-white md:hidden" onClick={this.toggleMenu} onKeyDown={this.toggleMenu}>
        <GiHamburgerMenu className="inline-block -mt-px" /> Menu
      </div>
    </nav>
  )}
}

export default Nav