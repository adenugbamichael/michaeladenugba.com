import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { Button, Alert, Row, Col } from "reactstrap"
import PortInput from "../form/PortInput"
import PortDate from "../form/PortDate"

import moment from "moment"

const validateInputs = (values) => {
  let errors = {}

  Object.entries(values).forEach(([key, value]) => {
    if (!values[key] && key !== "endDate") {
      errors[key] = `Field ${key} is required!`
    }
  })

  const startDate = moment(values.startDate)
  const endDate = moment(values.endDate)

  if (startDate && endDate && endDate.isBefore(startDate)) {
    errors.endDate = "End Date cannot be before start date!!!"
  }

  return errors
}

const PortfolioCreateForm = ({ initialValues, onSubmit, error }) => (
  <div>
    <Formik
      initialValues={initialValues}
      validate={validateInputs}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field label='Title' type='text' name='title' component={PortInput} />

          <Field
            label='Company'
            type='text'
            name='company'
            component={PortInput}
          />
          <Field
            label='Location'
            type='text'
            name='location'
            component={PortInput}
          />
          <Field
            label='Position'
            type='text'
            name='position'
            component={PortInput}
          />
          <Field
            label='Description'
            type='textarea'
            name='description'
            component={PortInput}
          />

          <Field
            label='Start Date'
            name='startDate'
            initialDate={initialValues.startDate}
            component={PortDate}
          />

          <Field
            label='End Date'
            name='endDate'
            canBeDisabled={true}
            initialDate={initialValues.endDate}
            component={PortDate}
          />
          {error && <Alert color='danger'>{error}</Alert>}

          <Button color='success' type='submit' disabled={isSubmitting}>
            Submit Portfolio
          </Button>
        </Form>
      )}
    </Formik>
  </div>
)

export default PortfolioCreateForm
