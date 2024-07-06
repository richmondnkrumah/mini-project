import puppeteer, { Browser, Page } from 'puppeteer-core';
import type { JOB } from '@/types/job';



class WebScraper {
  private browser: Browser | null = null;
  jobTitle: string;
  jobLocation: string | null;

  constructor(jobTitle: string, jobLocation: string | null) {
    this.jobTitle = jobTitle,
    this.jobLocation = jobLocation

  }
  async init(): Promise<void> {
    this.browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome-stable',headless: false });
  }

  async close(): Promise<void> {
    if (this.browser) {
      await this.browser.close();
    }
  }


  async scrapeIndeed(): Promise<JOB[]> {
    if (!this.browser) {
      throw new Error('Browser is not initialized. Call init() first.');
    }

    const page: Page = await this.browser.newPage();
    const baseUrl = 'https://www.indeed.com/jobs';
    const query = `q=${encodeURIComponent(this.jobTitle)}${this.jobLocation ? `&l=${encodeURIComponent(this.jobLocation)}` : ''}`;
    const url = `${baseUrl}?${query}`;

    const jobs: JOB[]  = [];
    let hasNextPage = true;
    let start = 0;

    while (hasNextPage) {
      await page.goto(`${url}&start=${start}`);
      
      const newJobs = await page.$$eval('#mosaic-provider-jobcards > ul > li', jobElements => {
        return jobElements.map(jobElement => {
          const titleElement = jobElement.querySelector('div h2.jobTitle a span');
          const companyElement = jobElement.querySelector('div.company_location div span[data-testid="company-name"]');
          const locationElement = jobElement.querySelector('div.company_location div span[data-testid="text-location"]');
          const summaryElements = jobElement.querySelectorAll('div.jobMetaDataGroup ul li');
          const datePostedElement = jobElement.querySelector('div.jobMetaDataGroup span[data-testid="myJobsStateDate"]');
          const urlElement = jobElement.querySelector('div h2.jobTitle a');

          const title = titleElement?.textContent || '';
          const company = companyElement?.textContent || '';
          const location = locationElement?.textContent || '';
          const summary = Array.from(summaryElements).map(el => el.textContent || '');
          const datePosted = datePostedElement?.textContent || '';
          const url = urlElement ? `https://www.indeed.com${urlElement.getAttribute('href')}` : '';
          const id = title + company

          return (title !== '' && company !== '') ? {
            title,
            company,
            location,
            summary,
            datePosted,
            url,
            id
          }: null
        });
      });
      // console.log(newJobs,"jobser")
      jobs.push(...(newJobs.filter(job => job !== null)));

      // hasNextPage = await page.evaluate(() => {
      //   const nextButton = document.querySelector('a[aria-label="Next Page"]');
      //   return nextButton !== null;
      // });

      // start += 10;
      hasNextPage = false
    }

    await page.close();
    return jobs;
  }
}

export default WebScraper;
