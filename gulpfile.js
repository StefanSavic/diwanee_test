var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var sass        = require('gulp-sass');
var wait = require('gulp-wait');
var uglifycss = require('gulp-uglifycss');
var bs = require('browser-sync').create();


// browser-sync task for starting the server.
gulp.task('browser-sync', function() {
    //watch files
    var files = [
    './style.css',
    './*.html',
    './*.js'
    ];

    bs.init({
        server: {
            baseDir: "./"
        }
        });
    });

// Sass task, will run when any SCSS files change & BrowserSync
// will auto-update browsers
gulp.task('sass', function () {
    return gulp.src(['sass/main.scss'])  
    .pipe(wait(500))
    .pipe(sass().on('error', sass.logError))
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": false
      }))
    .pipe(gulp.dest('./'))
    .pipe(bs.reload({stream:true}));
    });

gulp.task('javascript',function(){
    return gulp.src('js/*.js')
    .pipe(gulp.dest('./'))
    .pipe(bs.reload({stream:true}));
    });

// Default task to be run with `gulp`
gulp.task('default', ['sass','browser-sync','javascript'], function () {
    gulp.watch("sass/**/*.scss", ['sass']);
    gulp.watch('js/**/*.js', ['javascript']);
    gulp.watch("*.html").on('change', bs.reload);

    });

