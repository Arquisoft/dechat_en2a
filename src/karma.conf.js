// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    //base path from which karma looks for tests.
    basePath: "",
    //this array is used to specify the test files to load in the browser
    frameworks:["jasmine"],
   files: [
    '/**/*.js'
    ], 

    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'src/**/*.js': ['coverage']
    },

    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require ("karma-coverage"),
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-coverage-istanbul-reporter"),
      require("@angular-devkit/build-angular/plugins/karma")
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageReporter: {
      includeAllSources: true,
      dir: require("path").join(__dirname, "../coverage"),
      reports: ["html", "lcovonly", "text-summary"],
      reporters: [
        {
          type: 'html',
          subdir: 'html',
          watermarks:{
            statements: [50, 75],
            functions:  [50, 75],
            branches:   [50, 75],
            lines:      [50, 75]
          }
        }
      ],
      fixWebpackSourcePaths: true,
      verbose: true,
      thresholds: {
        statements: 70,
        lines: 70,
        branches: 70,
        functions: 70
      }
    },
    reporters: ["progress", "coverage"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["Chrome"],
    singleRun: false
  });
};