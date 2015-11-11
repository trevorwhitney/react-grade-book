import {combineReducers} from 'redux'
import { routerStateReducer } from 'redux-router'
import _ from 'underscore'

import validator from './validators'
import {
  GET_STUDENTS,
  CALCULATE_GRADE,
  VALIDATE_FIELD,
  INITIALIZE_VALIDATED_COMPONENT
} from './actionTypes'

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

const students = function (students = initialStudentData, action) {
  switch (action.type) {
    case CALCULATE_GRADE:
      return students.map((student) => {
        if (student.id == action.studentId) {
          student.grade = action.grade
          student.score = (action.grade / 100)
        }
        return student
      })
    case GET_STUDENTS:
    default:
      return students
  }
}


const validatedComponents = function (state = {}, action) {
  switch (action.type) {
    case VALIDATE_FIELD:
      return {
        ...state,
        [action.componentName]: {
          ...state[action.componentName],
          [action.fieldName]: {
            ...state[action.componentName][action.fieldName],
            isValid: action.isValid,
            isInvalid: !action.isValid,
            error: action.error
          }
        }
      }
    case INITIALIZE_VALIDATED_COMPONENT:
      const { componentName, fields } = action
      return {
        ...state,
        [componentName]: state[componentName] || fields.reduce((memo, field) => {
          return _.tap(memo, (memo) => memo[field] = {
            isValid: false,
            isInvalid: true,
            isDirty: false,
            isPristine: true,
            error: ''
          })
        }, {})
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  students,
  validatedComponents,
  router: routerStateReducer
})

export
default
rootReducer
