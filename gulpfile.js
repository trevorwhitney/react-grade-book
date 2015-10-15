var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var browserSync = require('browser-sync');
var source = require('vinyl-source-stream');

var clean = require('gulp-rimraf');

gulp.task('clean', function () {
  return gulp.src('./dist/**/*')
    .pipe(clean());
});

/* JavaScript */
gulp.task('build:js', ['clean'], function () {
  return browserify()
    .transform(babelify)
    .require('./app.js', {entry: true})
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('build:html', function () {
  return gulp.src('./index.html').pipe(gulp.dest('dist'));
});

gulp.task('build', ['build:js', 'build:html']);

gulp.task('serve', ['build'], function () {
  browserSync.init({
    server: {
      baseDir: "./dist"
    },
    open: false
  });

  gulp.watch(['./js/*.js', './app.js', '*.js', '**/*.js'], ['build']);
});

gulp.task('default', ['serve']);
