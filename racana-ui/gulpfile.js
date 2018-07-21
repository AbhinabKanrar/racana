"use strict"

const gulp = require('gulp'),
  cleanCSS = require('gulp-clean-css'),
  uglify = require('gulp-uglify'),
  pump = require('pump')

const srcCss = 'public/stylesheet/**/*.css',
  srcJs = 'public/scripts/**/*.js',
  srcFont = 'public/fonts/**/*.woff2'

const destCss = 'dist/stylesheet',
  destJs = 'dist/scripts',
  destFont = 'dist/fonts'

gulp.task('css', function () {
  return gulp.src(srcCss).pipe(cleanCSS({ compatibility: 'ie8' })).pipe(gulp.dest(destCss))
})

gulp.task('js', function (cb) {
  pump([
    gulp.src(srcJs),
    uglify(),
    gulp.dest(destJs)
  ], cb)
})

gulp.task('font', function () {
  return gulp.src(srcFont).pipe(gulp.dest(destFont))
})

gulp.task('default', gulp.series(['css', 'js', 'font'], function (done) {
  done()
}))