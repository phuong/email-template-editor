var through = require('through2');


function doMinify(html) {
    // Don't try to use htmlmin, just replace many whitespace characters
    // This step is used to optimize email html content but don't break email view
    html = html.replace(/\n/g, "\n__")
        .replace(/\s\s\s\s/g, "\t")
        .replace(/__/g, '')
        .replace(/class="[^"]*"/g, "");
    return html;
}
function minify(options) {
    // Creating a stream through which each file will pass
    return through.obj(function (file, enc, cb) {
        if (file.isNull()) {
            cb(null, file);
        }
        if (file.isStream()) {
            throw new PluginError(PLUGIN_NAME, 'Cannot read streams');
        }
        if (file.isBuffer()) {
            var html = doMinify(file.contents.toString(), options);
            file.contents = new Buffer(html);
            cb(null, file);
        }
    });
}
module.exports.minify = minify;