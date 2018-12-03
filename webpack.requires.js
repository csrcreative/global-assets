const _ = require('lodash');
const path = require("path");
const webpack = require("webpack");
const minimist = require('minimist');
const chalk = require('chalk');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const babelOptions = {
    presets: ["env"]
};

module.exports = {
    _,
    path,
    webpack,
    minimist,
    chalk,
    UglifyJSPlugin,
    babelOptions
}