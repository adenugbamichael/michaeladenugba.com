import React, { useState } from "react"
import Link from "next/link"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap"

import auth0 from "../../services/auth0"

const BsNavLink = (props) => {
  const { route, title } = props
  return (
    <Link href={route}>
      <a className='nav-link port-navbar-link'>{title}</a>
    </Link>
  )
}

const Login = () => {
  return (
    <span onClick={auth0.login} className='nav-link port-navbar-link clickable'>
      Login
    </span>
  )
}
const Logout = () => {
  return (
    <span
      onClick={auth0.logout}
      className='nav-link port-navbar-link clickable'
    >
      Logout
    </span>
  )
}

export default class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    const { isAuthenticated } = this.props
    return (
      <div className='bgcolor'>
        <Navbar
          dark
          expand='md'
          color='transparent'
          className='container-md port-navbar navspace absolute port-default'
        >
          <NavbarBrand className='port-navbar-brand' href='/'>
            <img src='/static/images/logo.svg' alt='' />
          </NavbarBrand>

          <NavbarToggler eee onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='me-auto' navbar>
              <NavItem className='port-navbar-item'>
                <BsNavLink route='/' title='Home' />
              </NavItem>
              <span className='port-navbar-item mini'>|</span>
              <NavItem className='port-navbar-item'>
                <BsNavLink route='/about' title='About' />
              </NavItem>
              <span className='port-navbar-item mini'>|</span>
              <NavItem className='port-navbar-item'>
                <BsNavLink route='/portfolios' title='Portfolio' />
              </NavItem>
              <span className='port-navbar-item mini'>|</span>
              <NavItem className='port-navbar-item'>
                <BsNavLink route='/blogs' title='Blog' />
              </NavItem>
              <span className='port-navbar-item mini'>|</span>
              <NavItem className='port-navbar-item'>
                <BsNavLink route='/cv' title='CV' />
              </NavItem>
              {/* <NavItem className='port-navbar-item'>
              <Login />
            </NavItem>
            <NavItem className='port-navbar-item'>
              <Logout />
            </NavItem> */}
            </Nav>
            {!isAuthenticated && (
              <NavbarText className='spa'>
                <Login />
              </NavbarText>
            )}
            {isAuthenticated && (
              <NavbarText className='spa'>
                <Logout />
              </NavbarText>
            )}
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

// function Header(args) {
//   const [isOpen, setIsOpen] = useState(false)

//   const toggle = () => setIsOpen(!isOpen)
//   return(
//     <div className="">
//       {/*  */}
//     </div>
//   )
// export default Header
