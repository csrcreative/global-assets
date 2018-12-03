const chalk = require("chalk");
const bs = require("browser-sync");
const bsAssets = bs.create("Assets");
const bsDemos = bs.create("Demos");


function serve(filesArray) {
  if (bsAssets.active) {
    // kill active assets browsersync processes
    bsAssets.exit();
  }

  if (bsDemos.active) {
    // kill active demos browsersync processes
    bsDemos.exit();
  }

  // start assets static file server
  bsAssets.init(
    {
      // server: "./",
      server: {
        baseDir: "./",
        middleware: function (req, res, next) {
          res.setHeader('Access-Control-Allow-Origin', '*'); // For serving fonts
          next();
        }
      },
      port: 3000,
      open: false
    }, function() {
      // start demos proxy server
      // this is placed in the assets callback function to fix a race condition for port reservation
      bsDemos.init(
        {
          proxy: "demos:8080/hermes/",
          files: filesArray
        }, function() {
          console.log(
            chalk.bold.yellowBright(
              "Browsersync is watching for changes."
            )
          );
        }
      );
    }
  );
  // bsDemos.reload(["./dist/css/*.css", "./dist/js/*.js", "./dist/img/*.*"]);
}

module.exports = serve;