import React, { Component, PropTypes } from 'react'

export default class StudentRow extends Component {
  render() {
    const {id, firstName, lastName, grade, calculateGrade, score} = this.props

    return (
      <tr>
        <td>{`${firstName} ${lastName}`}</td>
        <td><input
          type="text"
          name="grade"
          onChange={calculateGrade}
          data-student-id={id}
          value={grade}
        ></input></td>
        <td>{score}</td>
      </tr>
    )
  }
}

StudentRow.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string
}