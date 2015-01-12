#!/usr/bin/env node

var concat = require('concat-stream'),
    fs = require('fs'),
    argv = require('minimist')(process.argv.slice(2)),
    swig  = require('swig'),
    template = swig.compileFile('./_base.html');

(argv._.length ? fs.createReadStream(argv._[0], {encoding:"utf-8"}) : process.stdin).pipe(concat(convert));

function convert(data) {
    var divs = data.toString().split('---').filter(function(v) {
        return v.replace(/\s/g, '');
    }).map(function(v) {
        return '<section data-markdown><script type="text/template">' + v + '</script></section>';
    }).join('\n');

    output = template({
        content: divs
    })

    console.log(output)
}