import connectComponent from '../connectComponent'

import _ from 'underscore'
import React, {Component} from 'react'

const validators = {
  firstName: (value) => {
    return ''
  },
  dob: (value) => true
}

class NewStudent extends Component {
  constructor(props) {
    super(props)
    this.validators = validators
    this.initializeValidatedComponent = props.actions.initializeValidatedComponent
  }

  componentDidMount() {
    this.initializeValidatedComponent(this.constructor.name, Object.keys(this.validators))
  }

  render() {
    const props = this.props
    const validators = this.validators

    const {actions: {validateField}} = props
    const validateNewStudentField = function (fieldName, fieldValue) {
      validateField('NewStudent', fieldName, validators[fieldName](fieldValue))
    }
    const getFieldBlurredHandler = function (fieldName) {
      return event => {
        validateNewStudentField(fieldName, event.target.value)
      }
    }

    return (
      <form className="form">
        <div className="form-group">
          <label className="control-label" htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            id="firstName"
            onBlur={getFieldBlurredHandler('firstName')}
          />
        </div>
        <div className="form-group">
          <label className="control-label" htmlFor="lastName">Last Name</label>
          <input type="text" className="form-control" name="lastName" id="lastName"/>
        </div>
        <div className="form-group">
          <label className="control-label" htmlFor="dobMonth">Date of Birth</label>
          <input className="form-control" type="text" name="dob" id="dob"/>
        </div>

        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default connectComponent(NewStudent)