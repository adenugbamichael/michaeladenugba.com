import React from "react"
import BaseLayout from "@layouts/BaseLayout"

class SuperComponent extends React.Component {
  constructor(props) {
    super(props)

    this.someVaraible = "Just some variable"
  }

  alertName(title) {
    alert(title)
  }

  render() {
    return (
      <BaseLayout>
        <h1>I am Blogs Page</h1>
      </BaseLayout>
    )
  }
}

export default SuperComponent
