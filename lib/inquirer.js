const inquirer = require('inquirer');
var username = '';
var password = '';
module.exports = {

  // Ask for user credentials using inquirer dependency
  
  askSolidCredentials: () => {
      const questions = [
      {
        name: 'username',
        type: 'input',
        message: 'Enter your Solid username or e-mail address:',
        validate: function( value ) {
          if (value.length) {
            username = value;
            return true;
          } else {
            return 'Please enter your username or e-mail address.';
          }
        }
      },
      {
        name: 'password',
        type: 'password',
        message: 'Enter your password:',
        validate: function(value) {
          if (value.length) {
            password = value;
            return true;
          } else {
            return 'Please enter your password.';
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  },
}

