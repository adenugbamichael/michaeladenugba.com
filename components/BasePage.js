import { Container } from "reactstrap"
import PropTypes from "prop-types"

const BasePage = (props) => {
  const { className, title, body, containerClass } = props

  // const className = props.className || ""
  return (
    <div className={`base-page ${className}`}>
      <Container className={containerClass}>
        {title && (
          <div className='page-header'>
            <h1 className='page-header-title'>{title}</h1>
            <p className='page-header-body'>{body}</p>
          </div>
        )}
        {props.children}
      </Container>
    </div>
  )
}

BasePage.defaultProps = {
  className: "",
  containerClass: "",
}

export default BasePage
