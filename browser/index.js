const puppeteer = require('puppeteer');

const A4Width = 210;
const A4Height = 297;

const generatePdfFromHtml = async (postData) => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.setViewport({ width: (A4Width - 20)*5, height: (A4Height - 10)*5 });

  const params = new URLSearchParams(postData);
  await page.goto(`http://localhost:8000?${params.toString()}`, { waitUntil: 'networkidle2' })

  await page.pdf({
    path: 'hn.pdf',
    format: 'A4',
    printBackground: true,
    landscape: false,
    margin: {
      top: '0.5cm',
      bottom: '0.5cm',
      right: '1cm',
      left: '1cm'
    }
  });
  
  await browser.close();
};

generatePdfFromHtml({
  label: 'Total unique hosts',
  y: 'total_unique_host_count',
  xTickFormat: 'formatDateAsDayMonth',
  slug: 'hosts_changed_by_job_template',
});