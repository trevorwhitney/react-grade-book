import React, { Component, PropTypes } from 'react'
import StudentRow from './StudentRow'

export default class GradeBook extends Component {
  componentDidMount() {
    const {getStudents} = this.props
    getStudents()
  }

  render() {
    const { students, calculateGrade } = this.props
    let studentRows = students.map(({firstName, lastName}) => {
      return (<StudentRow firstName={firstName} lastName={lastName} calculateGrade={calculateGrade}/>)
    })

    return (
      <table>
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