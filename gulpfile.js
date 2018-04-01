var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');

// Compile sass into CSS & auto-inject into browser
gulp.task('sass',function () {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss','src/scss/style.scss'])
        .pipe(sass())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
});

// Move the Javascript files to src/js
gulp.task('js',function () {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js','node_modules/jquery/dist/jquery.slim.min.js','node_modules/popper.js/dist/umd/popper.min.js'])
        .pipe(gulp.dest('src/js'))
        .pipe(browserSync.stream());
});

// Static Servers + watching html/scss files
gulp.task('serve',['sass'],function () {
    browserSync.init({
        server: "./src"
    });

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss','src/scss/style.scss'],['sass']);
    gulp.watch('src/*.html').on('change',browserSync.reload);
});

gulp.task('default',['js','serve']);