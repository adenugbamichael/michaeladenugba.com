import React from "react"
import BasePage from "@components/BasePage"
import BaseLayout from "@layouts/BaseLayout"
import withAuth from "@hoc/withAuth"
import PortfolioCreatForm from "@components/portfolios/PorfolioCreateForm"
import { Row, Col } from "reactstrap"

class PortfolioNew extends React.Component {
  constructor(props) {
    super()

    this.savePortfolio = this.savePortfolio.bind(this)
  }
  savePortfolio(portfolioData) {
    alert(JSON.stringify(portfolioData, null, 2))
  }
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage
          className='portfolio-create-page'
          title='Create new Portfolio'
        >
          <Row>
            <Col md='6'>
              <PortfolioCreatForm onSubmit={this.savePortfolio} />
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default withAuth("siteOwner")(PortfolioNew)
