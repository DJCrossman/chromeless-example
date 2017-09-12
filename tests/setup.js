var argv = require('minimist')(process.argv.slice(2));
var env;
var creds = {user: argv.user, pass: argv.pass};

switch (argv.env) {
  case 'prod':
    env = {
      url: 'https://services.saskatchewan.ca/'
    };
    break;
  case 'staging':
    env = {
      url: 'https://staging-uat.saskatchewan.ca/'
    };
    break;
  case 'uat':
    env = {
      url: 'https://c1-uat.vivvo.com/'
    };
    break;
  default:
    env = {
      url: 'http://c1-dev.vivvo.com/'
    };
};

module.exports = {env, creds};
