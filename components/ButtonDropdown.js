import React from "react"
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"

export default class PortButtonDropdown extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false,
    }
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    })
  }

  renderMenu(items) {
    return (
      <DropdownMenu>
        {items.map((item, index) => (
          <DropdownItem key={index} {...item.handlers}>
            {item.text}{" "}
          </DropdownItem>
        ))}
      </DropdownMenu>
    )
  }

  render() {
    const { items } = this.props

    return (
      //   <div className='d-flex p-5'>
      <ButtonDropdown
        className='port-dropdown'
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
      >
        <DropdownToggle caret size='sm'></DropdownToggle>
        <DropdownMenu>{this.renderMenu(items)}</DropdownMenu>
      </ButtonDropdown>
    )
  }
}
