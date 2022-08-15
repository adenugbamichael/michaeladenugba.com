// import React from "react"
// import Link from "next/link"
// import { Link as NextLink } from "../../routes"

// class Header extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//         <Link href='/'>
//           <a>Home</a>
//         </Link>
//         <Link href='/about'>
//           <a>About</a>
//         </Link>
//         <Link href='/portfolios'>
//           <a>Portfolio</a>
//         </Link>
//         <Link href='/blogs'>
//           <a>Blog</a>
//         </Link>
//         <Link href='/cv'>
//           <a>CV</a>
//         </Link>
//       </React.Fragment>
//     )
//   }
// }

// export default Header

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

function Example(args) {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar {...args} expand='md' className='container-md'>
        <NavbarBrand href='/'>adenugba michael</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='me-auto' navbar>
            <NavItem>
              <Link href='/'>
                <a className='nav-link'>Home</a>
              </Link>
            </NavItem>
            <NavItem>
              <NavLink href='https://github.com/reactstrap/reactstrap'>
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Example
