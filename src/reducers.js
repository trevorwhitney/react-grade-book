import {combineReducers} from 'redux'
import { routerStateReducer } from 'redux-router'

import {GET_STUDENTS, CALCULATE_GRADE} from './actionTypes'

let initialStudentData = [
  {
    id: 1,
    firstName: 'James',
    lastName: 'May',
    score: 0
  },
  {
    id: 2,
    firstName: 'Richard',
    lastName: 'Hammond',
    score: 0
  },
  {
    id: 3,
    firstName: 'Jeremy',
    lastName: 'Clarkson',
    score: 0
  }
]

let students = function (students = initialStudentData, action) {
  switch (action.type) {
    case CALCULATE_GRADE:
      return students.map((student) => {
        if (student.id == action.studentId) {
          student.grade = action.grade
          student.score = (action.grade/100)
        }
        return student
      })
    case GET_STUDENTS:
    default:
      return students
  }
}

const rootReducer = combineReducers({
  students,
  router: routerStateReducer
})

export default rootReducer