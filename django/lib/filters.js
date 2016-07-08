exports.linebreaksbr = function (input, idx) {
    return input[idx];
}

var css = [
    'background-color: #0090de; border: solid 2px #A0DEFF;',
    'background-color: #845bf0; border: solid 2px #CAB6FF;',
    'background-color: #5fc67c; border: solid 2px #8DF7AA;',
    'background-color: #efa23d; border: solid 2px #FFC77F;',
    'background-color: #ea5d5d; border: solid 2px #FFD2D2;',
]

exports.gid2colorcode = function (input, idx) {
    var index = input % 5;
    var style = '" style="width: 38px; height: 38px; vertical-align: middle; text-align: center; border-radius: 50%;'
    style+=css[index];
    return style;
}