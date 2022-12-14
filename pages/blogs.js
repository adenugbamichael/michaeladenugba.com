import React from "react"
import BasePage from "@components/BasePage"
import BaseLayout from "@layouts/BaseLayout"

import { Container, Row, Col } from "reactstrap"
import { Link } from "../routes"

import { getBlogs } from "../actions"
import { shortenText } from "../helpers/utils"

import moment from "moment"

class Blogs extends React.Component {
  static async getInitialProps({ req }) {
    let blogs = []
    try {
      blogs = await getBlogs(req)
    } catch (err) {
      console.error(err)
    }
    return { blogs }
  }
  renderBlogs = (blogs) =>
    blogs.map((blog, index) => (
      <div key={index} className='post-preview'>
        <Link route={`/blogs/${blog.slug}`}>
          <a>
            <h2 className='post-title'>{blog.title}</h2>
            <h3 className='post-subtitle'>{shortenText(blog.subTitle)}</h3>
          </a>
        </Link>
        <p className='post-meta'>
          Posted by
          <a href='#'> {blog.author} </a>
          {moment(parseInt(blog.createdAt, 10)).format("LL")}
        </p>
      </div>
    ))

  render() {
    const { blogs } = this.props
    console.log(blogs)
    return (
      <BaseLayout
        {...this.props.auth}
        headerType={"landing"}
        className='blog-listing-page'
        title='Michael Adenugba - Newest Blogs to read'
      >
        <div className='masthead'>
          {/* <div className='overlay'></div> */}
          <Container>
            <div className='row'>
              <div className='col-lg-8 col-md-10 mx-auto'>
                <div className='site-heading'>
                  {/* <h1 className='hblog'>Blog</h1> 
                   <span className='subheading'>Programming, ...</span>  */}
                </div>
              </div>
            </div>
          </Container>
        </div>
        <BasePage className='blog-body'>
          <Row>
            <Col md='10' lg='8' className='mx-auto '>
              {this.renderBlogs(blogs)}
              <div className='clearfix'>
                <a className='btn btn-primary float-right' href='#'>
                  Older Posts &rarr;
                </a>
              </div>
            </Col>
          </Row>

          <footer>
            <Container>
              <Row>
                <div className='col-lg-8 col-md-10 mx-auto'>
                  <ul className='list-inline text-center'>
                    <li className='list-inline-item'>
                      <a href='#'>
                        <span className='fa-stack fa-lg'>
                          <i className='fas fa-circle fa-stack-2x'></i>
                          <i className='fab fa-twitter fa-stack-1x fa-inverse'></i>
                        </span>
                      </a>
                    </li>
                    <li className='list-inline-item'>
                      <a href='#'>
                        <span className='fa-stack fa-lg'>
                          <i className='fas fa-circle fa-stack-2x'></i>
                          <i className='fab fa-facebook-f fa-stack-1x fa-inverse'></i>
                        </span>
                      </a>
                    </li>
                    <li className='list-inline-item'>
                      <a href='#'>
                        <span className='fa-stack fa-lg'>
                          <i className='fas fa-circle fa-stack-2x'></i>
                          <i className='fab fa-github fa-stack-1x fa-inverse'></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                  <p className='copyright text-muted'>
                    Copyright &copy; Michael Adenugba 2022
                  </p>
                </div>
              </Row>
            </Container>
          </footer>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default Blogs
