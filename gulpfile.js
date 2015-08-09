var browserify = require('browserify');
var watchify = require('watchify');
var gulp = require('gulp');
var util = require('gulp-util');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var sass = require('gulp-sass');
//var uiWatch = require('./semantic/tasks/watch');
//var uiBuild = require('./semantic/tasks/build');

var b = watchify(browserify({
    entries: './src/app.js',
    debug: true,
    cache: {},
    packageCache: {}
  }));

gulp.task('js', bundle);
b.on('update', bundle); 
b.on('log', util.log);

function bundle() {
  	return b.bundle()
    	.on('error', util.log.bind(util, 'Browserify Error'))
    	.pipe(source('bundle.js'))
    	.pipe(buffer())
    	.pipe(sourcemaps.init({loadMaps: true}))
    	.pipe(sourcemaps.write('./'))
    	.pipe(gulp.dest('./dist/js/'));
}

gulp.task('bs', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('css', function() {
    gulp.src('./resources/sass/**/*.scss')
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sass())
        .pipe(concat('app.css'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/css'));
});

//gulp.task('watch ui', uiWatch);
//gulp.task('build ui', uiBuild);

gulp.task('default', ['css', 'js', 'bs']);
