import React from "react"
import BasePage from "@components/BasePage"
import BaseLayout from "@layouts/BaseLayout"
import withAuth from "@hoc/withAuth"

class Owner extends React.Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <h1>I am the Owner's Page</h1>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default withAuth("siteOwner")(Owner)
