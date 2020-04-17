var gulp = require('gulp');
var connect = require('gulp-connect');
var typedoc = require('gulp-typedoc');
var config = {
    root: 'docs/'
};

gulp.task('typedoc', function () {
    return gulp.src(['src/**/*.ts']).pipe(
        typedoc({
            module: 'commonjs',
            target: 'es6',
            experimentalDecorators: true,
            out: config.root,
            name: 'DocAgenda',
            readme: './README.md'
        })
    );
});

gulp.task('serve:docs', gulp.series('typedoc', function () {
    connect.server({
        root: config.root,
        livereload: true
    });
}));