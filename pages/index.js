import React from "react"
import Typed from "react-typed"

import BaseLayout from "@layouts/BaseLayout"
import { Button, Container, Row, Col } from "reactstrap"

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.roles = ["JavaScript", "React", "Nextjs"]
  }

  render() {
    const { isAuthenticated, user } = this.props.auth
    return (
      <BaseLayout
        className='cover'
        {...this.props.auth}
        headerType='index'
        title='Michael Adenugba - Portfolio'
      >
        <div className='main-section'>
          <Row>
            <Col md='10' lg='8' className='mx-auto  content'>
              <h1>michael adenugba</h1>

              <p>
                Hi, I’m Michael, a software engineer with a design background,
                mainly focused in frontend dev, but I enjoy
                <a href='#'> Creating Apps</a> and
                <a href='#'> Things People </a> will like to use.
              </p>
              <p>
                I’m enthusiastic about learning new web technologies and using
                them to build rich user experiences. Currently, I'm working on
                my <a href='#'>personal projects</a>
              </p>

              <div align='center'>
                <a href='#'>
                  <picture>
                    <img
                      src='/static/images/developer.png'
                      alt='dev logo'
                      height='125'
                      width='375'
                    />
                  </picture>
                </a>
              </div>
              <p>
                On top of adding value to the tech community and industry,
                recently at <a href='#'>syarpa</a> I contributed in improving
                the user interface new features. I also use an{" "}
                <a href='#'>Open Source </a>
                to share knowledge.
              </p>

              <div id='footer' style={{ align: "center" }}>
                <hr />

                {/* <div className='social'>
                    <a
                      href='mailto:adenugbamicke@gmail.com'
                      className='icon'
                      title='Send an email'
                      target='_blank'
                      data-v-4d78de60
                    >
                      <img src='/static/images/gmail.svg' alt='email' />
                    </a>
                    <a
                      href='https://github.com/adenugbamichael'
                      className='icon'
                      title='GitHub'
                      target='_blank'
                      data-v-4d78de60
                    >
                      <img src='/static/images/github.svg' alt='github' />
                    </a>
                    <a
                      href='https://www.linkedin.com/in/adenugbamichael/'
                      className='icon'
                      title='LinkedIn'
                      target='_blank'
                      data-v-4d78de60
                    >
                      <img src='/static/images/linkedin.svg' alt='linkedin' />
                    </a>
                    <a
                      href='https://twitter.com/MichaelAdenugba'
                      className='icon'
                      title='Twitter'
                      target='_blank'
                      data-v-4d78de60
                    >
                      <img src='/static/images/twitter.svg' alt='twitter' />
                    </a>
                  </div> */}
                <div className='noselect'>
                  <a
                    href='mailto:adenugbamicke@gmail.com'
                    title='Send an email'
                  >
                    <img
                      className='icon'
                      src='/static/images/gmail.svg'
                      alt='email'
                    />
                  </a>

                  <a href='https://github.com/adenugbamichael' title='Github'>
                    <img
                      className='icon space'
                      src='/static/images/github.svg'
                      alt='github'
                    />
                  </a>

                  <a
                    href='https://www.linkedin.com/in/adenugbamichael/'
                    title='LinkedIn'
                  >
                    <img
                      className='icon'
                      src='/static/images/linkedin.svg'
                      alt='linkedin'
                    />
                  </a>

                  <a href='https://twitter.com/MichaelAdenugba' title='Twitter'>
                    <img
                      className='icon space'
                      src='/static/images/twitter.svg'
                      alt='twitter'
                    />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </BaseLayout>
    )
  }
}

export default Index
