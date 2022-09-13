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
      <a className='nav-link port-navbar-link'>
        <span className='underline'>{title}</span>
      </a>
    </Link>
  )
}

const Login = () => {
  return (
    <span className='nav-link port-navbar-link clickable' onClick={auth0.login}>
      <div className='underline'> Login</div>
    </span>
  )
}
const Logout = () => {
  return (
    <span
      className='nav-link port-navbar-link clickable'
      onClick={auth0.logout}
    >
      <div className='underline'>Logout</div>
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
    const { isAuthenticated, user, className } = this.props

    return (
      <div className='bgcolor'>
        <Navbar
          dark
          expand='md'
          color='transparent'
          className={`container-md port-navbar port-nav-base navspace absolute ${className}`}
        >
          <NavbarBrand className='port-navbar-brand' href='/'>
            {/* <img src='/static/images/logo.svg' alt='' /> */}
            Michael .A
          </NavbarBrand>

          <NavbarToggler eee onClick={this.toggle} />
          <Collapse className='shift' isOpen={this.state.isOpen} navbar>
            <Nav className='me-auto' navbar>
              {/* <NavItem className='port-navbar-item'>
                <BsNavLink route='/' title='Home' />
              </NavItem> */}
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
            <span className='port-navbar-item mini'>|</span>

            {!isAuthenticated && (
              <NavbarText>
                <Login />
              </NavbarText>
            )}
            {isAuthenticated && (
              <NavbarText>
                <Logout />
              </NavbarText>
            )}
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
