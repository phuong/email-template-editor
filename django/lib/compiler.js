var through = require('through2');
var PluginError = require('gulp-util').PluginError;
var swig = require('swig');
var tags = require('./tags');
var filters = require('./filters');
var paths = require('../config.json').paths;
var swig = require('swig');
var fs = require('fs');

// Add custom tags for compiler
for (var key in tags) {
    var tag = tags[key];
    swig.setTag(key, tag.parse, tag.compile, tag.ends, tag.blockLevel);
}
//Add custom filters for compiler
for (var key in filters) {
    swig.setFilter(key, filters[key]);
}

swig.setDefaults({
    loader: swig.loaders.fs(__dirname + '/../' + paths.tmpl),
    cache: false
});

function getData(filePath) {
    var filename = filePath.replace(/^.*[\\\/]/, '');
    var data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
    return data[filename];
}

function templateCompiler(options) {
    // Creating a stream through which each file will pass
    return through.obj(function (file, enc, cb) {
        if (file.isNull()) {
            cb(null, file);
        }
        if (file.isStream()) {
            throw new PluginError(PLUGIN_NAME, 'Cannot read streams');
        }
        if (file.isBuffer()) {
            var params = {
                locals: getData(file.path),
                filename: file.path
            }
            var html = swig.render(file.contents.toString(), params);
            file.contents = new Buffer(html);
            cb(null, file);
        }
    });
}
module.exports = templateCompiler;