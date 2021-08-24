const puppeteer = require('puppeteer');

const generatePdfFromHtml = async () => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.setViewport({ width: 1754, height: 1240 });

  await page.goto('http://localhost:8000', { waitUntil: 'networkidle2' })

  await page.pdf({
    path: 'hn.pdf',
    format: 'A4',
    printBackground: true,
    landscape: true
  });
  
  await browser.close();
};

generatePdfFromHtml();