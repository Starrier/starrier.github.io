var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var htmlclean = require('gulp-htmlclean');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify-es').default;
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');//引入gulp-imagemin插件

// 代理
gulp.task('browser-sync', function () {
    browserSync.init({
        reloadDebounce: 500,
        proxy: 'localhost:4000'
    });
    gulp.watch('source/**/*.*').on('change', reload);
});

// 压缩css
gulp.task('minify-css', function () {
    return gulp.src('public/**/*.css')
        .pipe(minifycss().on('error', function (e) {
            console.log(e)
        }))
        .pipe(gulp.dest('public'));
});
// 压缩html
gulp.task('minify-html', () => {
    return gulp.src(['./public/**/*.html'])
        .pipe(htmlclean())
        .pipe(htmlmin({
            removeComments: true, //清除html注释
            collapseWhitespace: true, //去掉空格 压缩html
            collapseBooleanAttributes: true,
            //省略布尔属性的值，例如：<input checked="true"/> ==> <input />
            removeEmptyAttributes: true,
            //删除所有空格作属性值，例如：<input id="" /> ==> <input />
            removeScriptTypeAttributes: true,
            //删除<script>的type="text/javascript"
            removeStyleLinkTypeAttributes: true,
            //删除<style>和<link>的 type="text/css"
            removeEmptyElements: true,
            minifyJS: true, //压缩页面 JS
            minifyCSS: true, //压缩页面 CSS
            minifyURLs: true  //压缩页面URL
        }))
        .pipe(gulp.dest('./public'))
});

// 压缩js
gulp.task('minify-js', function () {
    return gulp.src('public/js/**/*.js')
        .pipe(uglify().on('error', function (e) {
            console.log(e)
        }))
        .pipe(gulp.dest('public/js'));
});

// 压缩 public/images 目录内图片(Version>3)
gulp.task('minify-images', function () {
   return gulp.src('src/img/*.{png,jpg,gif,ico}')//读取src/img下的所有png,jpg,gif,ico后缀名的文件
       .pipe(imagemin({
           optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
           progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
           interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
           multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
       }))
       .pipe(gulp.dest('dist/img'));
});

//gulp.task('default',gulp.parallel('browser-sync'));
gulp.task('default', gulp.series(gulp.parallel('minify-css', 'minify-js','minify-images')), function () {
   console.log("----------gulp Finished----------");
// Do something after a, b, and c are finished.
});

//gulp.task('default', gulp.series(gulp.parallel('minify-html', 'minify-css', 'minify-js')), function () {
 //   console.log("----------gulp Finished----------");
    // Do something after a, b, and c are finished.
//});
