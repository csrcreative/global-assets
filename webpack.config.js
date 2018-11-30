const _ = require('lodash');
const path = require("path");
const webpack = require("webpack");
const minimist = require('minimist');
const chalk = require('chalk');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const babelOptions = {
    presets: ["env"]
};
var target = _resolveBuildTarget("BUILD"); // Passing in a default target
var project = _resolveBuildProject("WITHIN"); // Passing in a default project
var folder = project.toLowerCase();
var default_params = {
    entry: {
        app: "./src/js/within/entry.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: babelOptions
                }
            },
            {
                test: /\.ts(x?)$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: babelOptions
                    },
                    {
                        loader: "ts-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    resolve: {
        extensions: [".js", ".ts", ".tsx", ".scss"],
        alias: {
            foundation : "foundation-sites"
        },
        symlinks: false
    }
};
var params_per_target = {
    // We can setup custom build parameters here, including custom entrypoints, etc.
    // We can even control if Webpack watches a file or just builds.
    // publicPath: is set in the public-path.js file
    BUILD: {
        output: {
            filename: "js/" + folder + "/[name].bundle.min.js",
            path: path.resolve(__dirname, "./dist/"),
            chunkFilename: "js/" + folder + "/[name].min.js",
            // publicPath: "./dist/"
        },
        plugins: [
            new UglifyJSPlugin()
        ],
        watch: false,
        mode: "production"
    },
    WATCH: {
        output: {
            filename: "js/" + folder + "/[name].bundle.js",
            path: path.resolve(__dirname, "./dev/"),
            chunkFilename: "js/" + folder + "/[name].js",
            // publicPath: "http://assets:3000/dev/"
        },
        watch: true,
        devtool: "source-map",
        mode: "development"
    }
};
var params_per_project = {
    BRAND: {
        entry: {
            app: "./src/js/brand/entry.js"
        }
    },
    HERMES: {
        entry: {
            app: "./src/js/hermes/entry.js"
        }
    },
    WITHIN: {
        entry: {
            app: "./src/js/within/entry.js"
        }
    }
}
var params = _.merge(default_params, params_per_target[target], params_per_project[project], _mergeArraysCustomizer);

function _resolveBuildTarget(defaultTarget) {
    // target is an argument passed into the node command from the package.json file
    var target = minimist(process.argv.slice(2)).TARGET;
    if (!target) {
        console.log('No build target provided, using default target instead. \n\n');
        target = defaultTarget;
    }
    return target;
}

function _resolveBuildProject(defaultProject) {
    // project is an argument passed into the node command from the package.json file
    var project = minimist(process.argv.slice(3)).PROJECT;
    if (!project) {
        console.log('No build project provided, using default project instead. \n\n');
        project = defaultProject;
    }
    return project;
}

function _printBuildInfo(target, project, params) {
    console.log('\n\n Starting ' + chalk.bold.green('"' + project + ' - ' + target + '"') + '. \n\n');
}

function _mergeArraysCustomizer(a, b, c) {
    if (_.isArray(a)) {
        return a.concat(b, c);
    }
}





_printBuildInfo(target, project, params);

module.exports = params;