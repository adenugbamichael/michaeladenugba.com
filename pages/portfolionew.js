import React from "react"
import BasePage from "@components/BasePage"
import BaseLayout from "@layouts/BaseLayout"
import withAuth from "@hoc/withAuth"
import PortfolioCreatForm from "@components/portfolios/PorfolioCreateForm"

class PortfolioNew extends React.Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage
          className='portfolio-create-page'
          title='Create new Portfolio'
        >
          <PortfolioCreatForm />
        </BasePage>
      </BaseLayout>
    )
  }
}

export default withAuth("siteOwner")(PortfolioNew)
