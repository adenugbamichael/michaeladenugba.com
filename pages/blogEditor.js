import React from "react"
import BasePage from "@components/BasePage"
import BaseLayout from "@layouts/BaseLayout"

import withAuth from "@hoc/withAuth"

import SlateEditor from "../components/slate-editor/Editor"

class BlogEditor extends React.Component {
  constructor(props) {
    super(props)
    this.saveBlog = this.saveBlog.bind(this)
  }

  saveBlog() {
    console.log("Calling saveBlog")
  }

  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage containerClass='editor-wrapper' className='blog-editor-page'>
          <SlateEditor save={this.saveBlog} />
        </BasePage>
      </BaseLayout>
    )
  }
}

export default withAuth("siteOwner")(BlogEditor)
