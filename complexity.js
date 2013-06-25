var args = process.argv.splice(2),
    fs = require('fs'),
    async = require('async'),
    path = require('path'),
    dir = args[0] || '.',
    cr = require('complexity-report'),
    recursivereaddir = require('recursive-readdir');
    opt = { logicalor: false, switchcase: false },
    list = [];


var done = function(err) {
  list.sort(function (x, y) {
      return y.value - x.value;
  });

  console.log('Most cyclomatic-complex functions:');
  list.slice(0, 10).forEach(function (entry) {
      console.log('  ', entry.file, entry.name, entry.value);
  });
};

var complexity = function(item, callback) {
  content = fs.readFileSync(item, 'utf-8');

  try {
    cr.run(content, opt).functions.forEach(function (entry) {
      var name = (entry.name === '<anonymous>') ? (':' + entry.line) : entry.name;
      list.push({ name: name, value: entry.complexity.cyclomatic, file: item });
    });
    callback();
  } catch (e) {
    // console.log('skipping', item);
    callback();
  }
};

var complexFiles = function(err, files) {
  async.each(files, complexity, done);
};

var files = recursivereaddir(dir, complexFiles);
