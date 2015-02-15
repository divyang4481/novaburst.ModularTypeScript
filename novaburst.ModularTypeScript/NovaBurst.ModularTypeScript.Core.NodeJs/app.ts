﻿
import moduleUtils = require('./modules/ModuleUtils/ModuleUtils');

// create bundling utility
var bundling = new moduleUtils.ModuleBundling(
    {
        basePath: __dirname + '/../',

        bundles:
        [
            // group scripts per module
            {
                files:
                [
                    { pattern: '([^\\\\]+)\\\\module.json$', moduleFilesPattern: 'module.angular.js$', moduleFilesPatternReverse: true }
                ],
                out: 'NovaBurst.ModularTypeScript.AppX.Front.UI\\modules\\bundles\\{{0}}.min.js'
            },

            // group all angular init scripts into a single file
            {
                files:
                [
                    { pattern: 'module.angular.js$' }
                ],
                out: 'NovaBurst.ModularTypeScript.AppX.Front.UI\\modules\\bundles\\module.angular.min.js'
            }
        ]
    });


// create Uglify config
var uglifyConfig =
    {
        options:
        {
            sourceMap: true,
            banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> */\n'
        },
        build: bundling.createGruntUglifyFilesConfig(__dirname)
    };

var x = 1;


//var modDir = new modBundling.ModuleDirectory(__dirname + '/../');
//var x = 1;