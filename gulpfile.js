var gulp = require('gulp'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass')(require('sass')),
    minify = require('gulp-minify'),
    cleanCss = require('gulp-clean-css');
 
    gulp.task('sass', function () {
        return gulp.src('./src/sass/style.scss')
          .pipe(sass().on('error', sass.logError))
          .pipe(cleanCss())
          .pipe(gulp.dest('./'));
      });

    gulp.task('bootstrap_sass', function () {
        return gulp.src('./src/sass/bootstrap/bootstrap.scss')
            .pipe(concat('bootstrap.css'))
          .pipe(sass().on('error', sass.logError))
          .pipe(cleanCss())
          .pipe(gulp.dest('./dist/css/'));
      });

    gulp.task('js', function () {    
        return gulp.src(['./src/js/bootstrap.min.js', './src/js/pixi.min.js', './src/js/pixi-filters.js', './src/js/index.umd.js', './src/js/fullpage.min.js', './src/js/scripts.js'])
            .pipe(concat('bundle.js'))
            .pipe(minify())
            .pipe(gulp.dest('./dist/js'));
    });
 
    gulp.task('watch', function () {
        gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
        gulp.watch('./src/sass/bootstrap/**/*.scss', gulp.series('bootstrap_sass'));
        gulp.watch('./src/js/**/*.js', gulp.series('js'));
    });