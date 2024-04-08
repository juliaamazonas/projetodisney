const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
/*const tinify = require('gulp-tinify');*/

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'))
};

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
};


/*function imagesTinify() {
    return gulp.src('./src/images/png-jpeg/hamburg-8573427_1280.jpg')
        .pipe(tinify('64SLSnm1gqfl4YvLlYNBv3T2MqLkgV1z')) // Substitua YOUR_API_KEY pela sua chave de API do TinyPNG/TinyJPG
        .pipe(gulp.dest('./dist/images/png-jpeg'));
};*/

exports.default = gulp.parallel(styles, images);

exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}