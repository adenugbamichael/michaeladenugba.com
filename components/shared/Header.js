import React, { useState } from "react"
import Link from "next/link"
import ActiveLink from "../ActiveLink"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap"

import auth0 from "../../services/auth0"

const BsNavLink = (props) => {
  const { route, title } = props
  const className = props.className || ""
  return (
    <ActiveLink activeClassName='active' route={route}>
      <a className={`nav-link port-navbar-link ${className}`}>{title}</a>
    </ActiveLink>
  )
}

const Login = () => {
  return (
    <span className='nav-link port-navbar-link clickable' onClick={auth0.login}>
      Login
    </span>
  )
}
const Logout = () => {
  return (
    <span
      className='nav-link port-navbar-link clickable'
      onClick={auth0.logout}
    >
      Logout
    </span>
  )
}

export default class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      dropdownOpen: false,
    }

    this.toggle = this.toggle.bind(this)
    this.toggleDropdown = this.toggleDropdown.bind(this)
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  toggleDropdown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    })
  }

  renderBlogMenu() {
    const { isSiteOwner } = this.props

    if (isSiteOwner) {
      return (
        <UncontrolledDropdown
          nav
          inNavbar
          className='port-navbar-link port-dropdown-menu'
          isOpen={this.state.dropdownOpen}
          toggle={this.toggleDropdown}
        >
          <DropdownToggle className='port-dropdown-toggle' nav caret>
            Admin
          </DropdownToggle>
          <DropdownMenu className='port-dropdown-menu'>
            <DropdownItem>
              <BsNavLink
                className='port-dropdown-item'
                route='/blogs'
                title='Blogs'
              />
            </DropdownItem>
            <DropdownItem>
              <BsNavLink
                className='port-dropdown-item'
                route='/blogs/new'
                title='Create Blog'
              />
            </DropdownItem>
            <DropdownItem>
              <BsNavLink
                className='port-dropdown-item'
                route='/blogs/dashboard'
                title='Dashboard'
              />
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      )
    }
    return (
      <NavItem className='port-navbar-item'>
        <BsNavLink route='/blogs' title='Blog' />
      </NavItem>
    )
  }

  render() {
    const { isAuthenticated, user, className } = this.props
    const { isOpen } = this.state

    const menuOpenClass = isOpen ? "menu-open" : "menu-class"

    return (
      <div className='menu-bg'>
        <Navbar
          className={`port-navbar port-nav-base absolute ${className} ${menuOpenClass}`}
          color='transparent'
          dark
          expand='xxl'
        >
          <NavbarBrand className='port-navbar-brand' href='/'>
            ic.
          </NavbarBrand>

          <NavbarToggler eee onClick={this.toggle} />
          <Collapse className='shift' isOpen={this.state.isOpen} navbar>
            <Nav className='me-auto' navbar>
              <NavItem className='port-navbar-item'>
                <BsNavLink route='/' title='Home' />
              </NavItem>

              <NavItem className='port-navbar-item'>
                <BsNavLink route='/portfolios' title='Projects' />
              </NavItem>

              {this.renderBlogMenu()}

              <NavItem className='port-navbar-item'>
                <BsNavLink route='/cv' title='CV' />
              </NavItem>

              {!isAuthenticated && (
                <NavItem className='port-navbar-item'>
                  <Login />
                </NavItem>
              )}
              {isAuthenticated && (
                <NavItem className='port-navbar-item'>
                  <Logout />
                </NavItem>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
