import React from "react"
import BasePage from "@components/BasePage"
import BaseLayout from "@layouts/BaseLayout"

class About extends React.Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className='about-page' title='I am About page'></BasePage>
      </BaseLayout>
    )
  }
}

export default About
