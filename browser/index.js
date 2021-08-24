const puppeteer = require('puppeteer');

const generatePdfFromHtml = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('http://localhost:8000', { waitUntil: 'networkidle2' })

  await page.pdf({ path: 'hn.pdf', format: 'A4', printBackground: true });
  
  await browser.close();
};

generatePdfFromHtml();