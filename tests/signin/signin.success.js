const { Chromeless } = require('chromeless')
const Setup = require('../setup')
const path = require('path');

async function run() {
  const chromeless = new Chromeless({
    // debug: true,
    viewport: {width: 1920, height: 1080, scale: 1}
  });

  const screenshot = await chromeless
    .goto(Setup.env.url + '#login')
    .clearCookies()
    .type(Setup.creds.user, 'input[name="userNameOrEmail"]')
    .type(Setup.creds.pass, 'input[type="password"]')
    .click('button.btn-primary')
    .click('button.btn-primary')
    .wait('div.tab-content')
    .goto(Setup.env.url + 'c1/#/dashboard/services')
    .exists('div[ui-view="servicesTab"]')
    .screenshot({ filePath: path.join(__dirname, '/screenshot/signin.success.png') })

    console.log(screenshot)

  await chromeless.end()
}

run().catch(function() {
  console.error.bind(console);
  process.exit(1);
});
