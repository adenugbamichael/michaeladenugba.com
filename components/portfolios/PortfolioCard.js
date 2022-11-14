import React from "react"
import { Col } from "reactstrap"

import moment from "moment"

export default class PortfolioCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }

    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    const { portfolio, children } = this.props
    const { isOpen } = this.state
    return (
      <article className='project'>
        <Col md='6'>
          <a href='#' className='preview'>
            <img src='/static/images/portfolio/pic1.png' />
          </a>
        </Col>
        <Col md='6'>
          <section>
            <h2 className='head'>{portfolio.title}</h2>

            <p className='page'>
              {moment(portfolio.startDate).format("MMMM YYYY")}
            </p>
            <p className='page'>{portfolio.description}</p>
            {/* <p>
                A shopping site for grocery👕👠 purchase with stripe payment.
              </p> */}
            <div className='links'>
              <a className='direct' href='#'>
                Website Link
              </a>
              <a className='direct' href='#'>
                GitHub Link
              </a>
            </div>
            <ul className='project-tags'>
              <li className='tag'>SSL</li>

              <li className='tag'>mongoDB</li>

              <li className='tag'>Nextjs</li>

              <li className='tag'>Auth0</li>
              <li className='tag'>Reactjs</li>
            </ul>
            <div className='readMore'>{children}</div>
          </section>
        </Col>
      </article>
    )
  }
}
