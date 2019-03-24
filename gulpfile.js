const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer  =  require('gulp-autoprefixer')
const cleanCss  =  require('gulp-clean-css')
const concat  =  require('gulp-concat')
const merge = require('merge-stream')
const minify = require('gulp-minify')
const imagemin = require('gulp-imagemin');

const sassFiles = [
    "./src/sass/main.sass",
]
const scssFiles = [
    "./src/sass/media.scss",
    "./src/sass/slider.scss"
]
const cssFiles = [
    "./src/css/normalize.css",
    "./src/css/bootstrap.min.css",
]

const jsFiles = [
    "./src/js/jquery.min.js",
    "./src/js/bootstrap.min.js",
    "./src/js/main.js",
    "./src/js/send.js",
    "./src/js/services.js",
    "./src/js/slick.min.js",
    "./src/js/slider.js"
]
//Таск на стили CSS, SASS
function styles() {

    const cssStream = gulp.src(cssFiles)
        .pipe(concat('cssFiles.css'))
    
    const sassStream = gulp.src(sassFiles)
        .pipe(sass())
        .pipe(concat('sassFiles.sass'))

    const scssStream = gulp.src(scssFiles)
        .pipe(sass())
        .pipe(concat('scssFiles.scss'))

    const mergeStream = merge(cssStream, sassStream, scssStream)
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(concat('all.min.css'))
        .pipe(cleanCss({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('build/css'))
    return mergeStream
}

//Таск на скрипты JS
function scripts() {
    return gulp.src(jsFiles)
    .pipe(concat("scripts.js"))
    .pipe(minify())
    .pipe(gulp.dest("build/js"))
}

function images() {
    const img = gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/img'))
    const icons = gulp.src('src/img/icons/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/img/icons'))
    const mergeImages = merge(img, icons)
    return mergeImages

}
//Task вызывающий функцию styles
gulp.task('styles', styles)
//Task вызывающий функцию scripts
gulp.task('scripts', scripts);
//Task вызывающий функцию images
gulp.task('images', images);
