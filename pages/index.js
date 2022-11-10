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
          <div className='background-image'>
            <img src='/static/images/background-index.png' />
          </div>

          <Container>
            <Row>
              <Col md='5'>
                <div className='hero-section'>
                  <div className={`flipper`}>
                    <div className='back'>
                      <div className='hero-section-content'>
                        {/* <h2> Full Stack Web Developer </h2> */}
                        <div className='motion'>
                          {/* <Typed
                            loop
                            typeSpeed={60}
                            backSpeed={60}
                            strings={this.roles}
                            backDelay={1000}
                            loopCount={0}
                            showCursor
                            className='self-typed'
                            cursorChar='|'
                          /> */}

                          {/* <img src='/static/images/frame.svg' alt='' /> */}
                        </div>
                        <div className='hero-section-content-intro-'>
                          hello world 🌎. I'm <span>michael</span>
                        </div>
                      </div>
                      <img
                        className='image imgcover'
                        src='/static/images/HERO.svg'
                      />
                      <div className='shadow-custom'>
                        <div className='shadow-inner'> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md='7' className='hero-welcome-wrapper'>
                <div className='atween'>
                  <div className='hero-welcome-text'>
                    <h1>
                      {/* {isAuthenticated && <span>{user.name}</span>} */}
                      Engineer. Developer.
                    </h1>

                    <h5 className='split'>
                      I'm a software engineer, mainly focused in frontend
                      development, but I enjoy creating apps and things people
                      will like to use. I also use an open source to share
                      knowledge. You can check my full bio on the links below.
                    </h5>
                  </div>

                  <Row className='soci-up'>
                    <Col sm='2' className='duce'>
                      <p className='pre'>Connect</p>
                    </Col>
                    <Col sm='10' className='roll duce'>
                      <ul class='social eSPOhw contact-bar'>
                        <li>
                          <a
                            title='My Twitter'
                            class='contact-item contact-twitter'
                            href='https://twitter.com/MichaelAdenugba'
                          >
                            Twitter
                          </a>
                        </li>
                        <li>
                          <a
                            title='My GitHub'
                            class='contact-item contact-github'
                            href='https://github.com/adenugbamichael'
                          >
                            GitHub
                          </a>
                        </li>

                        <li>
                          <a
                            title='My LinkedIn'
                            class='contact-item contact-linkedin'
                            href='https://www.linkedin.com/in/adenugba-michael-925019209/'
                          >
                            LinkedIn
                          </a>
                        </li>
                        <li>
                          <a
                            title='My Email'
                            class='contact-item contact-email'
                            href='mailto:adenugbamicke@gmail.com'
                          >
                            Email
                          </a>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BaseLayout>
    )
  }
}

export default Index

///////////////////////////////////////////////////
/////////////////////////////////////////////////////
//   render() {
//     return (
//       <div className='home'>
//         <div className='page'>
//           <div className='page__main-foot'>
//             <main>
//               <article role='none'>
//                 <header className='topic-header'>
//                   <div className='content-area'>
//                     <h1 id='content_heading' className='post__header__title'>
//                       Michael Adenugba
//                       <span
//                         className='txt-down-1 mt-12 display-block'
//                         role='presentation'
//                       >
//                         <Typed
//                           loop
//                           typeSpeed={60}
//                           backSpeed={60}
//                           strings={this.roles}
//                           backDelay={1000}
//                           loopCount={0}
//                           showCursor
//                           className='self-typed'
//                           cursorChar='|'
//                         />
//                       </span>
//                     </h1>
//                   </div>
//                 </header>
//                 <div className='tri' aria-hidden='true'></div>
//                 <BaseLayout />
//                 <div className='content-wrap'>
//                   <div className='content-area'>
//                     <blockquote className='Quote-sc-16lcn0y-0 daZJE'>
//                       Hi. 👋 <br></br>
//                       I'm Michael, a software developer with a passion to build,
//                       accessible websites and applications. Get informed,
//                       collaborate and discover my recent works and many more.
//                     </blockquote>
//                   </div>
//                 </div>
//               </article>
//             </main>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default Index
