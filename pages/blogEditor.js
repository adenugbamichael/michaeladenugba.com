import React from "react"
import BasePage from "@components/BasePage"
import BaseLayout from "@layouts/BaseLayout"

import withAuth from "@hoc/withAuth"

import SlateEditor from "../components/slate-editor/Editor"

class BlogEditor extends React.Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage
          containerClass='editor-wrapper'
          className='blog-editor-page'
          title='Write your story...'
        >
          <SlateEditor />
        </BasePage>
      </BaseLayout>
    )
  }
}

export default withAuth("siteOwner")(BlogEditor)
