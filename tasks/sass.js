const chalk = require("chalk");
const sass = require("node-sass");
const fs = require("fs");
const mkdirp = require("mkdirp");
const getDirName = require("path").dirname;
const autoprefixer = require("autoprefixer");
const postcss = require("postcss");


function compile(task, style) {
  // render the result
  var options = task;
  var output = '';
  var maps = false;

  if (style == "expanded") {
    output = options.dev;
    maps = true;
  }
  if (style == "compressed") {
    output = options.prod;
  }

  var result = sass.renderSync({
    file: options.src,
    includePaths: options.includepaths,
    outputStyle: style,
    outFile: output + ".map",
    sourceMap: maps,
    sourceMapContents: maps,
    sourceMapEmbed: maps
  });

  mkdirp(getDirName(output), function(err) {
    if (err) return cb(err);
    // write the initial css
    fs.writeFile(output, result.css, function () {
      console.log(chalk.bold.yellowBright("CSS " + output + " built."));
      // rewrite the css with vendor prefixes
      postcss([ autoprefixer ]).process(result.css, { from: output, to: output }).then(result => {
        mkdirp(getDirName(output), function(err) {
          if (err) return cb(err);
          fs.writeFile(output, result.css, function() {
            console.log(chalk.bold.yellowBright("Added vendor prefixes for " + output + " file."));
          });
        });
      });
    });
  });
}

// process.argv[2] is a command line argument passed
// This begins on 2 because the sequence of arguments passed in the command line invocation of this is 'node', 'this-js-file.js', 'argument'

function runSass(task) {
  const tasksKeys = Object.keys(task);
  const tasksString = tasksKeys.join(" - ");
console.log(process.argv[2]);
  if (!process.argv[2] || !process.argv[3]) {

    console.log(chalk.bold.yellowBright("Please provide the SASS task and format style you would like to perform.\nTask names:\n" + tasksString + "\nFormat styles:\nexpanded - compressed"));
  } else if (process.argv[3] != "compressed" && process.argv[3] != "expanded") {
    console.log(chalk.bold.redBright("Invalid format style. Valid format styles are: \n" + "expanded - compressed"));
  } else {
    compile(task, process.argv[3]);
  }
}

module.exports = runSass;