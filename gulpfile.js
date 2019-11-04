var gulp = require('gulp'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    fileinclude = require("gulp-html-tag-include");

var dest = "U:\\";

gulp.task('html', function() {

    return gulp.src(['main.html'])
            .pipe(fileinclude())
          .pipe(gulp.dest(dest));
});

gulp.task('css', function(){
    return gulp.src(['scss/main.scss'])
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest(dest));
});

gulp.task('dump', function(){
    return gulp.src('assets/**/*')
      .pipe(gulp.dest(dest));
});


gulp.task('build', gulp.series('css','html','dump'));


gulp.task('watch', function() {
    gulp.watch(['assets/**/*'], gulp.series('dump'));
  
    gulp.watch(['*.html'], gulp.series('html'));
  
      gulp.watch(['scss/**/*.scss'], gulp.series('css'));
    
  });