import {combineReducers} from 'redux'

import {GET_STUDENTS, CALCULATE_GRADE} from './actionTypes'

let students = function (state = [], action) {
  switch (action.type) {
    case GET_STUDENTS:
      return [
        {
          id: 1,
          firstName: 'James',
          lastName: 'May'
        },
        {
          id: 2,
          firstName: 'Richard',
          lastName: 'Hammond'
        },
        {
          id: 3,
          firstName: 'Jeremy',
          lastName: 'Clarkson'
        }
      ]
    case CALCULATE_GRADE:
      return state.map((student) => {
        if (student.id == action.studentId) {
          student.grade = (action.grade/100)
        }
        return student
      })

    default:
      return state
  }
}


const rootReducer = combineReducers({
  students
})

export default rootReducer