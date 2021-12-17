const gulp = require("gulp");
const stripDebug = require("gulp-strip-debug");

gulp.task(
  "strip-debug",
  () =>
    gulp
      .src("./**.js") // input file path
      .pipe(stripDebug()) // execute gulp-strip-debug
      .pipe(gulp.dest("./")) // output file path
);
