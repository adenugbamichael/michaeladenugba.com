import React from "react"
import BaseLayout from "@layouts/BaseLayout"
import BasePage from "@components/BasePage"
import { Link } from "../routes"
import { Row, Col, Button } from "reactstrap"
import { Router } from "../routes"
import { getPortfolios } from "../actions"
class Portfolios extends React.Component {
  static async getInitialProps() {
    let portfolios = []
    try {
      portfolios = await getPortfolios()
    } catch (err) {
      console.error(err)
    }
    return { portfolios }
  }

  renderPortfolios(portfolios) {
    return portfolios.map((portfolio, index) => {
      return (
        <React.Fragment key={index}>
          <article className='project'>
            <Col md='6'>
              <a href='#' className='preview'>
                <img src='/static/images/portfolio/pic1.png' />

                {/* {portfolio.image} */}
              </a>
            </Col>
            <Col md='6'>
              <section>
                {/* <h2>kia-clothing</h2> */}
                {/* <p>Created August 2022</p> */}
                <h2>{portfolio.title}</h2>
                <p>{portfolio.startDate}</p>
                <p>{portfolio.description}</p>
                {/* <p>
                A shopping site for grocery👕👠 purchase with stripe payment.
              </p> */}
                <div className='links'>
                  <a href='#'>Website Link</a>
                  <a href='#'>GitHub Link</a>
                </div>
                <ul className='project-tags'>
                  <li>SSL</li>

                  <li>mongoDB</li>

                  <li>Nextjs</li>

                  <li>Auth0</li>
                  <li>Reactjs</li>
                </ul>
                {
                  <React.Fragment>
                    <Button
                      onClick={() =>
                        Router.pushRoute(`/portfolios/${portfolio._id}/edit`)
                      }
                      color='warning'
                    >
                      Edit
                    </Button>{" "}
                    <Button color='danger'>Delete</Button>
                  </React.Fragment>
                }
              </section>
            </Col>
          </article>
        </React.Fragment>
      )
    })
  }

  render() {
    const { portfolios } = this.props

    return (
      <BaseLayout {...this.props.auth}>
        <BasePage
          className='portfolio-page cmain'
          title='Portfolios'
          body="Here are a few projects I've created recently."
        >
          <Button
            onClick={() => Router.pushRoute("/portfolioNew")}
            color='success'
            className='create-port-btn'
          >
            Create Portfolio
          </Button>
          <Row>{this.renderPortfolios(portfolios)}</Row>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default Portfolios
