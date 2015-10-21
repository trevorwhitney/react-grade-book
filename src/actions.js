import {GET_STUDENTS, CALCULATE_GRADE} from './actionTypes'

export function getStudents() {
  return {
    type: GET_STUDENTS
  }
}

export function calculateGrade(event) {
  return {
    type: CALCULATE_GRADE,
    grade: event.currentTarget.value,
    studentId: parseInt(event.currentTarget.dataset.studentId)
  }
}