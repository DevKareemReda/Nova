const { src, dest, watch } = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const pug = require("gulp-pug");

function compilePug() {
  return src("projects/pug/*.pug")
    .pipe(pug())
    .pipe(dest("dist"));
}

function css() {
  return src("projects/css/style.css")
    .pipe(autoprefixer("last 0 versions"))
    .pipe(cleanCSS())
    .pipe(dest("dist/css"));
}
function js() {
  return src("projects/js/scripts.js")
    .pipe(uglify())
    .pipe(dest("dist/js"));
}

function watchFiles() {
  watch("projects/pug/*.pug", compilePug);
  watch("projects/css/style.css", css);
  watch("projects/js/scripts.js", js);
}
exports.watchFiles = watchFiles;
