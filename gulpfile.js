const gulp = require('gulp');

/**
 * Gulp plugins
 */
const less = require('gulp-less');
const gutil = require('gulp-util');
const plumber = require('gulp-plumber');
const liveReload = require('gulp-livereload');
const notify = require('gulp-notify');
const exec = require('child_process').exec;
const runSequence = require('run-sequence');

/**
 * Gulp task - Compile LESS files
 */
gulp.task('less', _ => {
    return gulp.src('public/admin/src/assets/less/*.less')
        .pipe(plumber(function (error) {
            gutil.log(error.message);
            this.emit('end');
        }))
        .pipe(less())
        .pipe(gulp.dest('public/admin/src/assets/css'))
        .pipe(notify({message: 'LESS compilation complete'}));
});

/**
 * Gulp - NPM Install and Start for node API
 */
gulp.task('nodeapi-npm-start', (cb) => {
    exec('npm start', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

/**
 * Gulp - ng build & deploy for deploying admin angular app
 */
gulp.task('admin-ng-build', (cb) => {
    process.chdir('public/admin/');
    exec('npm install && bower install && ng build', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

/**
 * Gulp - watch for changes in LESS files
 */
gulp.task('less-watch', _ => {
    liveReload.listen();
    gulp.watch('public/admin/src/assets/less/*.less', ['less']);
});

/**
 * Gulp - task to serve Admin Portal Angular App
 */
gulp.task('admin-app-serve-ng', (cb) => {
    process.chdir('public/admin/');
    exec('npm start', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

/**
 * Gulp for Dev environment
 */
gulp.task('dev', ['less', 'less-watch', 'admin-app-serve-ng']);

/**
 * Gulp for UAT Environment (Heroku)
 */
//gulp.task('uat', ['less', 'admin-ng-build']);

gulp.task('uat', (done) => {
    runSequence('less', 'admin-ng-build', () => {
        console.log('UAT Deployment Done');
        done();
    })
})