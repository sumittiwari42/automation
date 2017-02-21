var gulp=require('gulp');
var cucumber=require('gulp-cucumber');
var argv=require('yargs').argv;

// gulp.task('cucumber',function(){
// 	return gulp.src('*features/*').pipe(cucumber({
// 		'steps': '*features/step_definitions/*.js',
// 		'support': '*features/support/*.js',
// 		'format': 'pretty'
// 	}));
// });

var file;
gulp.task('sumit',function(){
	return gulp.src('*features/'+argv.file+'.feature').pipe(cucumber({
		'steps': '*features/step_definitions/'+argv.file+'.js',
		'support': '*features/support/*.js',
		'format': 'pretty'
	}));
});

gulp.task('default',['sumit']);