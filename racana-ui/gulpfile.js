"use strict"

const gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-htmlmin'),
    pump = require('pump')

var srcCss = 'public/stylesheet/**/*.css',
    srcJs = 'public/scripts/**/*.js',
    srcFont = 'public/fonts/**/*.woff2',
    srcHtml = 'public/**/*.html'

var destCss = 'dist/stylesheet',
    destJs = 'dist/scripts',
    destFont = 'dist/fonts',
    descHtml = 'dist'

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

gulp.task('html', function () {
    return gulp.src(srcHtml).pipe(htmlmin({ collapseWhitespace: true })).pipe(gulp.dest(descHtml))
})

gulp.task('default', gulp.series(['css', 'js', 'font', 'html'], function (done) {
    done()
}))