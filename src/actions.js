import {
  GET_STUDENTS,
  CALCULATE_GRADE,
  VALIDATE_FIELD,
  INITIALIZE_VALIDATED_COMPONENT
} from './actionTypes'

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

export function validateField(componentName, fieldName, error) {
  const isValid = !((error !== undefined) && (error !== null) && (error != ''))

  return {
    type: VALIDATE_FIELD,
    componentName,
    fieldName,
    isValid,
    error
  }
}

export function initializeValidatedComponent(componentName, fields) {
  return {
    type: INITIALIZE_VALIDATED_COMPONENT,
    componentName,
    fields
  }
}