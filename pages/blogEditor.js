import React from "react"
import BasePage from "@components/BasePage"
import BaseLayout from "@layouts/BaseLayout"

import withAuth from "@hoc/withAuth"

import SlateEditor from "../components/slate-editor/Editor"

import { createBlog } from "../actions"

class BlogEditor extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isSaving: false,
    }

    this.saveBlog = this.saveBlog.bind(this)
  }

  saveBlog(story, heading) {
    const blog = {}
    blog.title = heading.title
    blog.subTitle = heading.subtitle
    blog.story = story

    this.setState({ isSaving: true })
    debugger

    createBlog(blog)
      .then((data) => {
        debugger
        this.setState({ isSaving: false })
        console.log(data)
      })
      .catch((err) => {
        this.setState({ isSaving: false })
        const message = err.message || "Server Error! "
        console.error(message)
      })
  }

  render() {
    const { isSaving } = this.state
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage containerClass='editor-wrapper' className='blog-editor-page'>
          <SlateEditor isLoading={isSaving} save={this.saveBlog} />
        </BasePage>
      </BaseLayout>
    )
  }
}

export default withAuth("siteOwner")(BlogEditor)
