// Gulp tasks
const gulp = require('gulp');
const sass = require('gulp-sass');
const reactNativeCss = require('gulp-react-native-css');

// Vars
const CSS_DIR = "./src/css/**.scss";
const CSS_DEST = "./src/styles";

// Css task
gulp.task('compile:css', () => {
  return gulp.src(CSS_DIR)
    .pipe(sass())
    .pipe(reactNativeCss())
    .pipe(gulp.dest(CSS_DEST));
});

gulp.task('watch:css', () => {
  gulp.watch(CSS_DIR, ['compile:css']);
})
