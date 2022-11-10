import React from "react"
import BasePage from "@components/BasePage"
import BaseLayout from "@layouts/BaseLayout"

import { Row, Col } from "reactstrap"

class Cv extends React.Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage title='Preview of my CV' className='cv-page'>
          <Row>
            <Col md={{ size: 8, offset: 2 }}>
              <div className='cv-title'>
                <a
                  download='live_cv.pdf'
                  className='btn btn-success'
                  href='/static/live_cv.pdf'
                >
                  Download
                </a>
              </div>
              <iframe
                style={{ width: "100%", height: "800px" }}
                src='/static/live_cv.pdf'
              ></iframe>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default Cv
