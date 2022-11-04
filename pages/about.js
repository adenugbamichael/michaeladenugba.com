import React from "react"
import BasePage from "@components/BasePage"
import { Row, Col } from "reactstrap"
import BaseLayout from "@layouts/BaseLayout"

class About extends React.Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className='about-page'>
          <Row className='mt-5'>
            <Col md='6'>
              <div className='left-side'>
                <h1 className='title fadein'>Hello, Welcome</h1>
                <h4 className='subtitle fadein'>To About Page</h4>
                <p className='subsubTitle fadein'>
                  Feel free to read short description about me.
                </p>
              </div>
            </Col>
            <Col md='6'>
              <div className='fadein'>
                <p>
                  My name is Michael Adenugba and I am a software engineer and
                  freelance developer.{" "}
                </p>
                <p>
                  I have a Bachelor's degree in Electrical and Electronics and
                  several projects in javascript development from modern mobile
                  to web applications in React and Nextjs.
                </p>
                <p>
                  Throughout my career, I have acquired advanced technical
                  knowledge and the ability to explain programming topics
                  clearly and in detail to a broad audience. I invite you to
                  take my course, where I have put a lot of effort to explain
                  web and software engineering concepts in a detailed, hands-on
                  and understandable way.
                </p>
              </div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default About
