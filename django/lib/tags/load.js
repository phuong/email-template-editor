exports.parse = function (str, line, parser, types, options, swig) {
    parser.on('*', function (token) {
        this.out.push(token.match);
    });
    return true;
};

exports.compile = function (compiler, args, content, parents, options, blockName) {
    return compiler(content, parents, options, blockName) + '\n';
};

exports.ends = false;

exports.blockLevel = true;