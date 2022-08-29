import React from "react"

export default class PortfolioCreatForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { title: "", description: "", language: "" }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ title: event.target.value })
  }

  handleSubmit(event) {
    alert(
      "A name was submitted: " +
        this.state.title +
        " " +
        this.state.description +
        " " +
        this.state.language +
        " "
    )
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            name='title'
            type='text'
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name='description'
            value={this.state.description}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Pick your favorite Programming Language:
          <select
            name='language'
            value={this.state.language}
            onChange={this.handleChange}
          >
            <option value='c++'>C++</option>
            <option value='javascript'>Javascript</option>
            <option value='nodejs'>Node</option>
            <option value='typescript'>Typescript</option>
          </select>
        </label>
        <input type='submit' value='Submit' />
      </form>
    )
  }
}