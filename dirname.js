var path = require('path')

var dirname = (function () {
  if (__dirname) return __dirname
  if (document.currentScript && document.currentScript.src) {
    return path.dirname(String(document.currentScript.src)) + '/'
  }
  var scripts = document.getElementsByTagName('script')
  var script = scripts[scripts.length - 2]
  if (script.src) {
    return path.dirname(String(script.src)) + '/'
  }
  return '/'
}())

module.exports = dirname

