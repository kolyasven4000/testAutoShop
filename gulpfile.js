var gulp = require('gulp'),
  rename = require('gulp-rename'),
	minifyCss = require('gulp-minify-css');
   autoprefixer = require('gulp-autoprefixer'),
	//rename = require("gulp-rename"),
	connect = require('gulp-connect'),
	livereload = require('gulp-livereload'),
	sass = require('gulp-sass');
 
//server connect
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});
//css
gulp.task('css', function() {
   gulp.src('scss/style.scss')
   		.pipe(sass.sync().on('error', sass.logError))
   		.pipe(autoprefixer('last 15 versions', '> 0.5%', 'ie9'))	
      .pipe(gulp.dest('app/css'))
   		.pipe(minifyCss({compatibility: 'ie8'}))
   		.pipe(rename('style.min.css'))
   		.pipe(gulp.dest('app/css'))
   		.pipe(connect.reload());
   		
});
//html
gulp.task('html',function() {
	gulp.src('app/index.html')
	.pipe(connect.reload());
})

//watch
gulp.task('watch', function () {
    	gulp.watch('scss/**/*.scss', ['css'])
    	gulp.watch('app/index.html', ['html'])


})
//default
gulp.task('default', ['connect', 'css', 'html', 'watch']);