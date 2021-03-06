var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var browserSync = require('browser-sync');
var source = require('vinyl-source-stream');

var clean = require('gulp-rimraf');
var wait = require('gulp-wait');

gulp.task('clean', function () {
  return gulp.src('./dist/**/*')
    .pipe(clean())
    .pipe(wait(500));
});

/* JavaScript */
gulp.task('build:js', function () {
  return browserify({
    debug: true,
    fullPaths: true
  }).transform(babelify)
    .require('./src/app.js', {entry: true})
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('build:html', function () {
  return gulp.src('./index.html').pipe(gulp.dest('dist'));
});

gulp.task('build', ['clean', 'build:js', 'build:html']);

gulp.task('serve', ['build'], function () {
  browserSync.init({
    server: {
      baseDir: "./dist"
    },
    open: false
  });

  gulp.watch(['./src/*.js', './src/**/*.js'], ['build:js']);
  gulp.watch([ 'index.html'], ['build:html']);
});

gulp.task('default', ['serve']);
