var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');

gulp.task('css', function(){
  return gulp.src('sass/all.scss')
    .pipe(sass())
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css'))
});