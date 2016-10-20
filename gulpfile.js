var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
//var webserver = require("gulp-webserver");
var connect = require("gulp-connect");

gulp.task('scssA',function(){
  gulp.src('./**/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(rename(function(path){
      path.extname = ".wxss";
    })).pipe(gulp.dest('./'));
    //dest指的是相对于编译的文件位置
});
gulp.task("webserver",function(){
	connect.server({
		livereload:true,//实时刷新
		port:"8090"
	})
	
})

//sass编译
gulp.task('watch',function(){
  gulp.watch('./pages/**/*.scss',['scssA']);
  gulp.watch('./utils/**/*.scss',['scssA']);
});

gulp.task('default',['watch','webserver'],function(){
  console.log('gulp is start');
})
