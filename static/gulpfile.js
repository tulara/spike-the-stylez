var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('sass/all.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
});