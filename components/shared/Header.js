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

const BsNavLink = (props) => {
  const { route, title } = props
  return (
    <Link href={route}>
      <a className='nav-link port-navbar-link'>{title}</a>
    </Link>
  )
}

function Header(args) {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className='bgcolor'>
      <Navbar
        {...args}
        dark
        expand='md'
        color='transparent'
        className='container-md port-navbar absolute port-default'
      >
        <NavbarBrand className='port-navbar-brand' href='/'>
          {/* Adenugba Michael  */}
        </NavbarBrand>
        <NavbarToggler eee onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
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
              <BsNavLink route='/cv' title='My CV(PDF)' />
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header
