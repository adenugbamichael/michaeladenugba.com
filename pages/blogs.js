import React from "react"
import BasePage from "@components/BasePage"
import BaseLayout from "@layouts/BaseLayout"

class Blogs extends React.Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <h1>I am Blogs page</h1>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default Blogs
