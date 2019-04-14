const fs = require("fs");

fs.readFile("node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/browser.js", "utf8", function (err,data) {
  if (err) {
    return;
  }
  var result = data.replace(/node: false/g, "node: {crypto: true, stream: true, fs: \'empty\'}");

  fs.writeFile("node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/browser.js", result, "utf8", function (err) {
    if (err){ 
      return;
    }
  });
});



fs.readFile("node_modules/@comunica/actor-init-sparql/lib/ActorInitSparql-browser.js", "utf8", function (err,data) {
  if (err) {
    return;
  }
  var result = data.replace(/operation = (await this.mediatorOptimizeQueryOperation.mediate({ context, operation })).operation;/g, "//operation = (await this.mediatorOptimizeQueryOperation.mediate({ context, operation })).operation;");

  fs.writeFile("node_modules/@comunica/actor-init-sparql/lib/ActorInitSparql-browser.js", result, "utf8", function (err) {
    if (err){
      return;
    }
  });
});
