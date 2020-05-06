import React from "react"
import { Link } from "gatsby"
import { GiHamburgerMenu } from "react-icons/gi"



const Nav = class extends React.Component {

  state = { showMenu : false }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }
 
  render() {
    const menuActive = this.state.showMenu ? 'is-active' : '';
    const burgerActive = this.state.showMenu ? 'is-active' : '';
    return (     
    <nav className="w-3/12 lg:flex lg:content-end lg:justify-end lg:flex-col">
      <div className={`navigation-wrapper navigation-wrapper--${menuActive}`} >
        <ul className="md:bg-red md:flex md:w-full md:flex-row md:justify-start md:items-stretch">
          <li>
            <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/domestic-electrical-services">Domestic Electrical Services</Link>
          </li>
          <li>
            <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/commercial-electrical-services">Commercial Electrical Services</Link>
          </li>
          <li>
            <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/telecommunications-utilities">Telecommunications &amp; Utilities</Link>
          </li>
          <li>
            <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/led-lights-ev-chargers">LED Lights &amp; EV Chargers</Link>
          </li>
          <li>
            <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/recent-projects">Recent Projects</Link>
          </li>
          <li>
            <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="block text-center" onClick={this.toggleMenu}>
          <span className="block p-2 text-center text-white"><GiHamburgerMenu className="inline-block -mt-px" /> Menu</span>
      </div>
    </nav>
  )}
}

export default Nav