const fs = require("fs");
fs.rename("docs/index.html","docs/404.html", function (err) {
    if (err) {
        throw err;
    }
    console.log('Rename complete: index.html -> 404.html');
  });
