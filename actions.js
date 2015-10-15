import {GET_STUDENTS, CALCULATE_GRADE} from './actionTypes'

export function getStudents() {
  return {
    type: GET_STUDENTS
  }
}

export function calculateGrade(event) {
  console.log("calculating grade")
  console.log(event.currentTarget)

  return {
    type: CALCULATE_GRADE,
    score: event.currentTarget.value,
    studentId: event.currentTarget.dataset.studentId
  }
}