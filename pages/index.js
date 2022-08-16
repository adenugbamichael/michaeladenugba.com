import React from "react"
import Typed from "react-typed"

import BaseLayout from "@layouts/BaseLayout"
import { Button, Container, Row, Col } from "reactstrap"

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.roles = [
      "Developer",
      "Tech Lover",
      "Team Player",
      "Blogger",
      "React.js",
      "Next.js",
    ]
  }

  render() {
    return (
      <BaseLayout className='cover'>
        <div className='main-section'>
          <div className='background-image'>
            <img src='/static/images/background.png' />
          </div>

          <Container>
            <Row className='smallrow'>
              <Col md='3'>
                <div className='hero-section'>
                  <div className='hero-section-content'></div>
                  <img className='image' src='/static/images/mjck.jpg' />
                  <div className='shadow-custom'>
                    <div className='shadow-inner'> </div>
                  </div>
                </div>
              </Col>
              <Col md='9' className='hero-welcome-wrapper'>
                <div className='nametitle'>Michael Adenugba</div>

                <div className='hero-welcome-text'>
                  <h1>
                    Hi👋, I'm Michael, a software developer with a passion to
                    build, accessible websites and applications. Check out my
                    projects I was working on throughout the year!
                  </h1>
                </div>
                <Typed
                  loop
                  typeSpeed={60}
                  backSpeed={60}
                  strings={this.roles}
                  backDelay={1000}
                  loopCount={0}
                  showCursor
                  className='self-typed'
                  cursorChar='|'
                />
                {/* <div className='hero-welcome-bio'>
                  <h1>Let's take a look on my work.</h1>
                </div> */}
              </Col>
            </Row>
          </Container>
        </div>
      </BaseLayout>
    )
  }
}

export default Index
