var gulp = require('gulp'),
	nodemon = require('gulp-nodemon'),
	gulpMocha =  require('gulp-mocha'),
	env = require('gulp-env'),
	supertest = require('supertest');


gulp.task('default', function() {
	nodemon({
		script: 'server.js',
		ext: 'js',
		env: {
			PORT: 9002
		},
		ignore: ['./node_module/**']
	})
	.on('restart', function() {
		console.log('Restarting')
	})
});

/*gulp.task('test', function() {
	env({vars: {ENV: 'Test'}});
	gulp.src('tests/*.js')
		.pipe(gulpMocha({reporter: 'nyan'}))
});*/