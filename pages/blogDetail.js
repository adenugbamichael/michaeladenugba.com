import React from "react"
import BasePage from "@components/BasePage"
import BaseLayout from "@layouts/BaseLayout"

class BlogDetail extends React.Component {
  static getInitialProps() {}

  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage
          className='blog-detail-page'
          title='I am Blog Detail Page'
        ></BasePage>
      </BaseLayout>
    )
  }
}

export default BlogDetail
