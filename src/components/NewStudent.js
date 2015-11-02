import _ from 'underscore'
import React from 'react'
import connectComponent from '../connectComponent'

const NewStudent = (props) => {
  const startYear = new Date().getFullYear() - 100;
  const dobYears = _.range(100).map(i => {
    return (
      <option value={startYear + i }>{startYear + i}</option>
    )
  })
  const dobMonths = _.range(1, 12).map(i => {
    return (
      <option value={i}>{i}</option>
    )
  })

  return (
    <form class="form">
      <div className="form-group">
        <label class="control-label" htmlFor="firstName">First Name</label>
        <input type="text" className="form-control" name="firstName" id="firstName"/>
      </div>
      <div className="form-group">
        <label class="control-label" htmlFor="lastName">Last Name</label>
        <input type="text" className="form-control" name="lastName" id="lastName"/>
      </div>
      <div className="form-group">
        <label class="control-label" htmlFor="dobMonth">Date of Birth</label>
        <select className="form-control" name="dobMonth" id="dobMonth">
          {dobMonths}
        </select>
        <select className="form-control" name="dobYear" id="dobYear">
          {dobYears}
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default connectComponent(NewStudent)