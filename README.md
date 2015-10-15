# Test Fetch

This repo is a thought experiment that resulted from a desire to try out the new ES6 feature
[fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), or more specifically,
[isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch) untill the spec is finalized.

Due to the way fetch is defined globally, it was hard to spy on it, spying on `window.fetch` or
`global.fetch` did not work. I also tried using [jasmine-ajax]() to use the real fetch and mock the
response, but that is currently not working (see [issue #134](https://github.com/jasmine/jasmine-ajax/issues/134)).

This repository show two ways of testing fetch, one by always injecting it into functions that
require it, the other by using setting the global fetch instead on an application global config
object, which can then be reset with a spy. See [ajaxSpec.js](test/ajaxSpec.js) for the two approaches.