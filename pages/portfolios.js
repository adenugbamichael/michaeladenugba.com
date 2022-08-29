import React from "react"
import BaseLayout from "@layouts/BaseLayout"
import BasePage from "@components/BasePage"
import { Link } from "../routes"
import axios from "axios"
import {
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardText,
} from "reactstrap"
class Portfolios extends React.Component {
  static async getInitialProps() {
    let posts = []
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      )
      posts = response.data
    } catch (err) {
      console.error(err)
    }

    return { posts: posts.splice(0, 10) }
  }

  renderPosts(posts) {
    return posts.map((post, index) => {
      return (
        <Col md='4'>
          <React.Fragment key={index}>
            <span className='outside'>
              <Card
                className='portfolio-card inner'
                // style={{
                //   width: "18rem",
                // }}
              >
                <CardHeader className='portfolio-card-header'>
                  Some Position {index}
                </CardHeader>
                <img
                  alt='Card cap'
                  src='/static/images/portfolio/kai.png'
                  width='100%'
                />
                <CardBody>
                  <div class='tool'>
                    <ul>
                      <li>react</li>
                      <li>nodejs</li>
                      <li>nextjs</li>
                      <li>serverless</li>
                      <li>auth0</li>
                      <li>Styled components</li>
                    </ul>
                  </div>
                  <CardText className='portfolio-card-text'>
                    Some quick example text to build on the card title and make
                    up the bulk of the card‘s content.
                  </CardText>
                  <div className='readMore'> </div>
                </CardBody>
              </Card>
            </span>
          </React.Fragment>
        </Col>
      )
    })
  }

  render() {
    const { posts } = this.props
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className='portfolio-page' title='Portfolios'>
          <Row className='wholepost'>{this.renderPosts(posts)}</Row>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default Portfolios
