var gulp = require('gulp');
var shell = require('gulp-shell');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCss = require('gulp-clean-css');
var connect = require('gulp-connect');

// This is used when editing template styles.
// It has to completely rebuild the style guide, note that this takes about 5s.
gulp.task('build-styleguide',
  shell.task('"./node_modules/.bin/stylemark" -i "./sass" -o "./styleguide" -c "./default.stylemark.yml"')
);

// Task that reloads the browser after force-styleguide
gulp.task('reload-styleguide', async function () {
    gulp.src('./styleguide/*')
      .pipe(connect.reload());
});

// Compiles, autoprefixes & minifies the sass files
gulp.task('sass', function () {
  return gulp
    .src(['./sass/styles.scss'])
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cleanCss())
    .pipe(gulp.dest('./dist'));
});

// Copies the fonts folder
gulp.task('copy-fonts', function() {
  return gulp.src(['./fonts/**/*'], {
    base: 'src'
  }).pipe(gulp.dest('./dist/fonts'));
});

// Copies the images folder
gulp.task('copy-images', function() {
  return gulp.src(['./images/**/*'], {
    base: 'src'
  }).pipe(gulp.dest('./dist/images'));
});

// Runs a server at http://localhost:8085/
gulp.task('server', async function () {
  connect.server({
    root: './styleguide',
    port: process.env.PORT || '8090',
    livereload: true
  });
});

// Watches files and auto-refreshes when changes are saved
gulp.task('watch', async function () {
  gulp.watch(['./sass/**/*.scss', './sass/**/*.md'], gulp.series('sass', 'build-styleguide', 'reload-styleguide'));
});

gulp.task('dev', gulp.series('sass', 'copy-images', 'copy-fonts', 'build-styleguide', 'server', 'watch'));

gulp.task('generate-styleguide', gulp.series('sass', 'copy-images', 'copy-fonts', 'build-styleguide'));

// Only compiles the sass to the dist folder
gulp.task('dist', gulp.series('sass', 'copy-images', 'copy-fonts'));