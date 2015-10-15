import Config from './config'

function ajaxAction(response) {
  return {
    type: 'AJAX',
    response: response
  }
}

export function ajaxNotInjected() {
  return dispatch => {
    return Config.fetch('https://api.github.com/users/trevorwhitney/repos')
      .then(resp => resp.json())
      .then(parsedResponse => dispatch(ajaxAction(parsedResponse)));
  }
}

export default function (injectedFetch) {
  return dispatch => {
    return injectedFetch('https://api.github.com/users/trevorwhitney/repos')
      .then(resp => resp.json())
      .then(parsedResponse => dispatch(ajaxAction(parsedResponse)));
  }
}