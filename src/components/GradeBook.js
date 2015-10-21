import React, { Component, PropTypes } from 'react'
import StudentRow from './StudentRow'

export default class GradeBook extends Component {
  componentDidMount() {
    const {getStudents} = this.props
    getStudents()
  }

  render() {
    const { students, calculateGrade } = this.props
    let studentRows = students.map(({firstName, lastName, id, grade, score}) => {
      return (<StudentRow
        key={id}
        firstName={firstName}
        lastName={lastName}
        grade={grade}
        score={score}
        id={id}
        calculateGrade={calculateGrade}/>)
    })

    return (
      <table className="table table-striped table-responsive">
        <tbody>
          {studentRows}
        </tbody>
      </table>
    )
  }
}

GradeBook.propTypes = {
  student: PropTypes.object
}