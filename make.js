const puppeteer = require('puppeteer');

// witness the full potential of await/async...
(async() => {
	const browser = await puppeteer.launch({args: ["--disable-web-security"]});
	const page = await browser.newPage();
	page.on('console', msg => console.log(msg.text()));
	await page.goto(`file://${__dirname}/manuscrit.html`);
	await page.pdf({path: 'manuscrit.pdf', format: 'A4'});
	await browser.close();
})();
