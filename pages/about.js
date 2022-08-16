import React from "react"
import BasePage from "../components/BasePage"

import BaseLayout from "@layouts/BaseLayout"

class About extends React.Component {
  render() {
    return (
      <BaseLayout>
        <BasePage>
          <h1>I am About Page </h1>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default About
