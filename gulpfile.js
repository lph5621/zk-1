var gulp = require("gulp");
var sass = require("gulp-sass");
var fs = require("fs");
var url = require("url");
var server = require("gulp-webserver");
var path = require("path");
var list = require("./src/mock/list.json");

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

gulp.task("server",function(){
    return gulp.src("./src")
    .pipe(server({
        port:9898,
        open:true,
        middleware:function(req,res,next){
            var pathname = url.parse(req.url).pathname;

            if(pathname === "/favicon.ico"){
                res.end("");
                return
            }

            if(pathname==="/api/list"){
                res.end(JSON.stringify({
                    code:1,
                    data:list
                }))
            }else{
                pathname = pathname ==="/" ? "index.html" : pathname;
                res.end(fs.readFileSync(path.join(__dirname,"src",pathname)));
            }
           
        }
    }))

    
})

//开发环境
gulp.task("dev",gulp.series("devSass","server","watch"))