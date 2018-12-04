const ncp = require("ncp");
const chalk = require("chalk");

function copyFonts(paths, destination) {
    ncp(paths.src, paths.destinations[destination], function (err) {
        if (err) {
            return console.error(chalk.bold.redBright(err));;
        } else {
            console.log(chalk.bold.yellowBright(destination + " fonts copied."));
        }
    });
}

function fonts(paths) {
    if (!process.argv[2]) {
        console.log(chalk.bold.yellowBright("Please provide a destination for font copying."));
    } else {
        copyFonts(paths, process.argv[2]);
    }
}

module.exports = fonts;