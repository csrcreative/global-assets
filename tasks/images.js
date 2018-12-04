const chalk = require("chalk");
const imagemin = require("imagemin");
const imageminJpegtran = require("imagemin-jpegtran");
const imageminPngquant = require("imagemin-pngquant");
const imageminSvgo = require("imagemin-svgo");

function minify(type, paths) {
  if (type == "jpg") {
    imagemin([`${paths.input}/jpg/*.jpg`], `${paths.output}/jpg`, {
      plugins: [imageminJpegtran()]
    }).then(files => {
      console.log(chalk.bold.yellowBright("JPG Dist images minified."));
    });
    
    imagemin([`${paths.input}/jpg/*.jpg`], `${paths.output}/jpg`, {
      plugins: [imageminJpegtran()]
    }).then(files => {
      console.log(chalk.bold.yellowBright("JPG Dev images minified."));
    });
  }

  if (type == "png") {
    imagemin([`${paths.input}/png/*.png`], `${paths.output}/png`, {
      plugins: [imageminPngquant({ quality: "65-80" })]
    }).then(files => {
      console.log(chalk.bold.yellowBright("PNG Dist images minified."));
    });
    
    imagemin([`${paths.input}/png/*.png`], `${paths.output}/png`, {
      plugins: [imageminPngquant({ quality: "65-80" })]
    }).then(files => {
      console.log(chalk.bold.yellowBright("PNG Dev images minified."));
    });
  }

  if (type == "svg") {
    imagemin([`${paths.input}/svg/*.svg`], `${paths.output}/svg`, {
      use: [
        imageminSvgo({
          plugins: [{ removeViewBox: false }]
        })
      ]
    }).then(files => {
      console.log(chalk.bold.yellowBright("SVG Dist images minified."));
    });
    
    imagemin([`${paths.input}/svg/*.svg`], `${paths.output}/svg`, {
      use: [
        imageminSvgo({
          plugins: [{ removeViewBox: false }]
        })
      ]
    }).then(files => {
      console.log(chalk.bold.yellowBright("SVG Dev images minified."));
    });
  }
}

function images(paths) {
  if (!process.argv[2] || (process.argv[2] != "jpg" && process.argv[2] != "png" && process.argv[2] != "svg")) {
    console.log(
      chalk.bold.yellowBright(
        "Please provide an image type to minify.\nImage types are:\njpg - png - svg"
      )
    );
  } else {
    minify(process.argv[2], paths);
  } 
}

module.exports = images;
