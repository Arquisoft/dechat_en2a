const http = require('http');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquierer = require('./lib/inquirer');
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello deChat\n');
// })

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`)
//   callback();
// })


function startSession() {
  clear();
  console.log(
    chalk.blue(
      figlet.textSync('de-chat', {horizontalLayout: 'full'})
    )
  );
  askForCredentials();
}

async function askForCredentials() {
  const credentials = await inquierer.askSolidCredentials();
  console.log(credentials.username);
}

startSession();



