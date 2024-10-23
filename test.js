const sleep = ms => new Promise(res => setTimeout(res, ms));

(async () => {
  console.log(new Date().getSeconds());
  await sleep(3000);
  console.log(new Date().getSeconds());
})();
const puppeteer = require('puppeteer');

async function getPic() {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.setViewport({width: 1800, height: 900});
  await page.goto('https://google.com');
  const targetInput = '#APjFqb';
  await page.waitForSelector(targetInput);
  await page.type(targetInput, "qa engineering");
  const submitButton = 'body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf.emcav > div.UUbT9.EyBRub > div.aajZCb > div.lJ9FBc > center > input.gNO89b';
  await page.waitForSelector(submitButton);
  await page.click(submitButton);
  await sleep(3000);
  await page.screenshot({path: 'google.png'});
  await browser.close();
}
getPic();
