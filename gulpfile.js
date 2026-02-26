'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return gulp.src('./scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./static/css'));
};

exports.buildStyles = buildStyles;

// Watch the folder for changes.
// exports.watch = function () {
//   gulp.watch('./static/scss/*.scss', buildStyles);
// };





// var path = require('path');
// var autoprefixer = require('gulp-autoprefixer');
// var sourcemaps = require('gulp-sourcemaps');
// var open = require('gulp-open');

// var Paths = {
//     HERE: './',
//     DIST: 'dist/',
//     CSS: './static/css/',
//     SCSS_TOOLKIT_SOURCES: './static/scss/*.scss',
//     SCSS: './static/scss/**/**'
// };

// gulp.task('clean', () => {
//     return del([
//         'static/css/hawkes.css',
//     ]);
// });

// gulp.task('compile-scss', function() {
//     return gulp.src(Paths.SCSS_TOOLKIT_SOURCES)
//         .pipe(sourcemaps.init())
//         .pipe(sass().on('error', sass.logError))
//         .pipe(autoprefixer())
//         .pipe(sourcemaps.write(Paths.HERE))
//         .pipe(gulp.dest(Paths.CSS));
// });

// gulp.task('watch', function() {
//     gulp.watch(Paths.SCSS, ['compile-scss']);
// });

// gulp.task('open', function() {
//     gulp.src('index.html')
//         .pipe(open());
// });

// gulp.task('open-app', ['open', 'watch']);

//gulp.task('default', gulp.series(['clean', 'compile-scss']));
//gulp.task('default', gulp.series(['compile-scss']));