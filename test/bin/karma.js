#!/usr/bin/env node
var path = require('path');

var currentDir = path.dirname(require.main.filename);
var port = 9876;

function config() {
  var autoWatch = process.env.NODE_ENV !== 'CI';
  var singleRun = process.env.NODE_ENV === 'CI';

  var reporters = process.env.NODE_ENV === 'CI' ? ['spec'] : ['html'];

  return {
    basePath: currentDir,
    frameworks: ['jasmine', 'browserify'],
    files: [
      '../**/*.js'
    ],
    exclude: [
      '../support/*.js',
      '../bin/*.js'
    ],
    preprocessors: {
      '../**/*.js': ['browserify']
    },
    browserify: {
      debug: true,
      transform: [ 'babelify' ]
    },
    reporters: reporters,
    port: port,
    colors: true,
    logLevel: 'WARN',
    browsers: ['Chrome'],
    autoWatch: autoWatch,
    singleRun: singleRun
  };
}

var Server = require('karma/lib/server');
new Server(config()).start();

if (process.env.NODE_ENV !== 'CI') {
  var open = require("open");
  var jasmineUrl = "http://localhost:" + port + "/debug.html";
  setTimeout(function () {
    open(jasmineUrl);
  }, 1000);
}
