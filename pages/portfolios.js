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
            <span>
              <Card className='portfolio-card'>
                <img alt='Sample' src='https://picsum.photos/300/200' />
                <CardBody
                  style={{
                    margin: "1rem",
                  }}
                >
                  <CardTitle className='portfolio-card-title' tag='h5'>
                    Card title
                  </CardTitle>

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
          <Row>{this.renderPosts(posts)}</Row>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default Portfolios

{
  /* <Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src="https://picsum.photos/300/200"
  />
  <CardBody>
    <CardTitle tag="h5">
      Card title
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Card subtitle
    </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
    <Button>
      Button
    </Button>
  </CardBody>
</Card> */
}

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

// ;<Col md='4'>
//   <React.Fragment key={index}>
//     <span>
//       <Card className='portfolio-card'>
//         <CardHeader className='portfolio-card-header'>
//           Some Position {index}
//         </CardHeader>
//         <CardBody>
//           <p className='portfolio-card-city'> Some Location {index} </p>
//           <CardTitle className='portfolio-card-title'>
//             Some Company {index}
//           </CardTitle>
//           <CardText className='portfolio-card-text'>
//             Some Description {index}
//           </CardText>
//           <div className='readMore'> </div>
//         </CardBody>
//       </Card>
//     </span>
//   </React.Fragment>
// </Col>
