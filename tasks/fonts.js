const ncp = require("ncp");
const chalk = require("chalk");
const destinations = {
    dev: "dev/fonts",
    dist: "dist/fonts"
}

function copyFonts(destination) {
    ncp("src/fonts", destinations[destination], function (err) {
        if (err) {
            return console.error(chalk.bold.redBright(err));;
        } else {
            console.log(chalk.bold.yellowBright(destination + " fonts copied."));
        }
    });
}

if (!process.argv[2]) {
    console.log(chalk.bold.yellowBright("Please provide a desitination for font copying."));
} else {
    copyFonts(process.argv[2]);
}