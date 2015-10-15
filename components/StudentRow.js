import React, { Component, PropTypes } from 'react'

export default class StudentRow extends Component {
  render() {
    const {id, firstName, lastName, grade, calculateGrade} = this.props
    console.log(calculateGrade)

    return (
      <tr>
        <td>{`${firstName} ${lastName}`}</td>
        <td><input type="text" name="grade" onChange={calculateGrade} student-id={id}></input></td>
        <td>{grade}</td>
      </tr>
    )
  }
}

StudentRow.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string
}