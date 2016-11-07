var gulp = require('gulp');
// 插件的主要文件

var postcss = require('gulp-postcss');
// 目前使用的插件名字

var autoprefixer = require('autoprefixer');
// ({
//     browsers: ['> 10%'],
// })
// 选项
// 自动添加前缀

// var cssnext = require('cssnext');
// 颜色自动转换

var precss = require('precss');
// sass

// var pxtorem = require('postcss-pxtorem');
// pxtorem

// var atImport = require('postcss-import');
// 使用import链接css
// @import "b.css";

// var mqpacker = require('css-mqpacker');
// 综合媒体查询

// var cssnano = require('cssnano')
// var cssnano = require('cssnano')({
//     discardComments: true
// });
// 以上是引用。。压缩代码

gulp.task('css', function () {
  var processors = [
  autoprefixer,
  // cssnext,
  precss,
 //  pxtorem({
 //   rootValue: 100,
 //   replace: true,
 //   propWhiteList: [],
 //   // selectorBlackList: ['border'],
 // }),
  // atImport,
  // mqpacker,
  // cssnano,
  ];
  return gulp.src('input/public.css')
  // return gulp.src('input/*.css')
  .pipe(postcss(processors))
  .pipe(gulp.dest('css/'));
});
