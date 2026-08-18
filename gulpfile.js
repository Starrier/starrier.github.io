var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify-es').default;
var htmlMinifier = require('html-minifier').minify;
var { Transform } = require('stream');

gulp.task('browser-sync', function () {
    browserSync.init({
        reloadDebounce: 500,
        proxy: 'localhost:4000'
    });
    gulp.watch('source/**/*.*').on('change', reload);
});

gulp.task('minify-css', function () {
    return gulp.src(['public/**/*.css', '!public/**/*.min.css'])
        .pipe(minifycss().on('error', function (e) {
            console.log(e)
        }))
        .pipe(gulp.dest('public'));
});

gulp.task('minify-html', function () {
    var options = {
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        minifyJS: false,
        minifyCSS: true,
        minifyURLs: true
    };
    return gulp.src(['./public/**/*.html'])
        .pipe(new Transform({
            objectMode: true,
            transform: function (file, enc, cb) {
                if (file.isBuffer()) {
                    try {
                        file.contents = Buffer.from(htmlMinifier(file.contents.toString(), options));
                    } catch (e) {
                        console.warn('htmlmin skip', file.relative, '-', (e.message || '').split('\n')[0]);
                    }
                }
                cb(null, file);
            }
        }))
        .pipe(gulp.dest('./public'));
});

gulp.task('minify-js', function () {
    return gulp.src([
        'public/js/**/*.js',
        '!public/js/**/*.min.js',
        '!public/js/vue2.6.11.js',
        '!public/js/jquery3.5.1.js'
    ])
        .pipe(uglify().on('error', function (e) {
            console.log(e)
        }))
        .pipe(gulp.dest('public/js'));
});

gulp.task('default', gulp.parallel('minify-html', 'minify-css', 'minify-js'));
