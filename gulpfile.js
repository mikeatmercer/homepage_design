var gulp = require('gulp'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer');

var dest = ""

gulp.task('html', function() {

    return gulp.src(['main.html'])
          .pipe(gulp.dest(dest));
});

gulp.task('css', function(){
    return gulp.src(['scss/main.scss'])
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest(dest));
});


gulp.task('build', gulp.series('css','html'));


gulp.task('watch', function() {

  
    gulp.watch(['*.html'], gulp.series('html'));
  
      gulp.watch(['scss/**/*.scss'], gulp.series('css'));
    
  });