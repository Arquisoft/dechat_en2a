// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

exports.config = {
  allScriptsTimeout: 11000,
  specs: ["./src/features/**/*.feature"],
  capabilities: {
    "browserName": "chrome",
    "chromeOptions": {
      "args": ["--headless", "--no-sandbox"]
    }
  },
  directConnect: true,
  baseUrl: "http://localhost:4200/",
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  onPrepare() {
    require("ts-node").register({
      project: require("path").join(__dirname, "./tsconfig.e2e.json")
    });
  },
  cucumberOpts: {
    require: ["./src/steps/**/*.steps.ts"],
  },
};