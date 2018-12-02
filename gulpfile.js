var gulp = require("gulp");
var sass = require("gulp-sass");

//编译scss
gulp.task("devSass",function(){
    return gulp.src("./src/scss/index.scss")
    .pipe(sass())
    .pipe(gulp.dest("./src/css"))
})
//监听
gulp.task("watch",function(){
    return gulp.watch("./src/scss/index.scss",gulp.series("devSass"))
})

//开发环境
gulp.task("dev",gulp.series("devSass","watch"))