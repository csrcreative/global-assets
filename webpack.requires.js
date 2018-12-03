const _ = require('lodash');
const path = require("path");
const webpack = require("webpack");
const minimist = require('minimist');
const chalk = require('chalk');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const babelOptions = {
    presets: ["env"]
};

const default_params = {
    entry: {
        app: "./src/js/entry.js"
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

module.exports = {
    _,
    path,
    webpack,
    default_params,
    _resolveBuildTarget,
    _resolveBuildProject,
    _printBuildInfo,
    _mergeArraysCustomizer

}