/* globals require, exports */

'use strict';

// gulp plugins
var gulp          = require('gulp'),
gutil             = require('gulp-util'),
es                = require('event-stream'),
sass              = require('gulp-sass'),
autoprefixer      = require('gulp-autoprefixer'),
coffee            = require('gulp-coffee'),
uglify            = require('gulp-uglify'),
concat            = require('gulp-concat'),
eco               = require('gulp-eco'),
mochaPhantomjs    = require('gulp-mocha-phantomjs');

// sass compiler task
gulp.task('sass', function () {
  return gulp.src('./app/assets/stylesheets/*.scss')
    .pipe(sass({
      onError: function (error) {
        gutil.log(gutil.colors.red(error));
        gutil.beep();
      },
      onSuccess: function () {
        gutil.log(gutil.colors.green('Sass styles compiled successfully.'));
      }
    }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('./public/css/'))
    .pipe(gulp.dest('./spec/css/'));
});

// CoffeeScript compiler task
gulp.task('coffee', function () {
  return gulp.src('app/assets/javascripts/**/*.coffee')
    .pipe(coffee({bare: true})).on('error', gutil.log)
    .pipe(gulp.dest('public/scripts'))
    .pipe(gulp.dest('spec/scripts'));
});

// template pre-rendering
gulp.task('eco', function () {
  return gulp.src('app/assets/javascripts/**/*.eco')
    .pipe(eco())
    .pipe(gulp.dest('public/scripts'))
    .pipe(gulp.dest('spec/scripts'));
});

// Script task (minify, uglify)
gulp.task('scripts', ['coffee'], function () {
  return gulp.src('public/scripts/**/*.js')
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build'));
});

// tests task
gulp.task('test', function() {
  return gulp.src('spec/index.html')
    .pipe(mochaPhantomjs({reporter: 'spec', dump: 'test.log'}));
});

gulp.task('watch', function () {
  gulp.watch([ 'app/assets/stylesheets/**/*.scss'], ['sass']);
  gulp.watch([ 'app/assets/javascripts/**/*.eco'], ['eco']);
  gulp.watch([ 'app/assets/javascripts/**/*.coffee'], ['scripts']);
});

// gulp.task('clean', function () {
//   gutil.log('Clean task goes here...');
// });

gulp.task('build', ['sass', 'scripts', 'eco'], function () {});

gulp.task('default', ['build', 'watch']);
