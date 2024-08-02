import puppeteer, { Browser, Page } from 'puppeteer-core';
import type { JOB } from '@/types/job';



class WebScraper {
  private browser: Browser | null = null;
  async init(): Promise<void> {
    this.browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome-stable', headless: false });
  }

  async close(): Promise<void> {
    if (this.browser) {
      await this.browser.close();
    }
  }


  async scrapeIndeed(jobTitle: string, jobLocation: string | null): Promise<JOB[]> {
    if (!this.browser) {
      throw new Error('Browser is not initialized. Call init() first.');
    }

    const page: Page = await this.browser.newPage();
    const baseUrl = 'https://www.indeed.com/jobs';
    const query = `q=${encodeURIComponent(jobTitle)}${jobLocation ? `&l=${encodeURIComponent(jobLocation)}` : ''}&sort=date`;
    const url = `${baseUrl}?${query}`;

    const jobs: JOB[] = [];
    let hasNextPage = true;
    let start = 0;

    while (hasNextPage) {
      await page.goto(`${url}&start=${start}`);

      const newJobs = await page.$$eval('#mosaic-provider-jobcards > ul > li', jobElements => {
        return jobElements.map(jobElement => {
          const titleElement = jobElement.querySelector('div h2.jobTitle a span');
          const companyElement = jobElement.querySelector('div.company_location div span[data-testid="company-name"]');
          const locationElement = jobElement.querySelector('div.company_location div[data-testid="text-location"]');
          const summaryElements = jobElement.querySelectorAll('div.jobMetaDataGroup ul li');
          const datePostedElement = jobElement.querySelector('div.jobMetaDataGroup span[data-testid="myJobsStateDate"]');
          const urlElement = jobElement.querySelector('div h2.jobTitle a');
          const detailsLinkElement = jobElement.querySelector('div h2.jobTitle a');

          const title = titleElement?.textContent || '';
          const company = companyElement?.textContent || '';
          const location = locationElement?.textContent || '';
          const summary = Array.from(summaryElements).map(el => el.textContent || '');
          const datePosted = datePostedElement?.textContent || '';
          const url = urlElement ? `https://www.indeed.com${urlElement.getAttribute('href')}` : '';
          const id = title + company + location + datePosted + summary[0]
          const isRemote = location.includes('Remote')
          const detailsLink = detailsLinkElement?.getAttribute('href') || ''

          return (title !== '' && company !== '') ? {
            title,
            company,
            location,
            summary,
            datePosted,
            url,
            id,
            isRemote,
            detailsLink
          } : null
        });
      });
      // console.log(newJobs,"jobser")
      const filteredJob = newJobs.filter(job => job !== null) as JOB[]
      jobs.push(...(filteredJob));

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

  async getIndeedJobDetails(url: string) {
    if (!this.browser) {
      throw new Error('Browser is not initialized. Call init() first.');
    }

    const page: Page = await this.browser.newPage();
    const baseUrl = 'https://indeed.com'
    await page.goto(baseUrl + url)

    //     const finalDetails = await page.$$eval(".jobsearch-JobComponent", details => {
    //       return details.map(detail => {
    //         const titleElement = detail.querySelector('div.jobsearch-JobInfoHeader-title-container h1 span');
    //         const companyElement = detail.querySelector(' div[data-testid="inlineHeader-companyName"] > span > a')
    //         const locationElement = document.querySelector('div[data-testid="inlineHeader-companyLocation"] > div')
    //         console.log(companyElement,"companyElement",locationElement)
    //         const salaryAndJobElement = detail.querySelector('div[data-testid="jobsearch-OtherJobDetailsContainer"] > div > div')
    //         const applyLinkElement = detail.querySelector('#applyButtonLinkContainer > div > div > button')
    //         const descriptionElement = detail.querySelector('#jobDescriptionText')

    //         const title = titleElement?.textContent || ''
    //         const companyName = companyElement?.textContent || ''
    //         const companyLink = companyElement?.getAttribute('href')
    //         const location = locationElement?.textContent || ''
    //         const salary = salaryAndJobElement
    //         // const jobType = salaryAndJobElement[1].textContent || ''
    //         const applyLink = applyLinkElement?.getAttribute('href')
    //         const description = descriptionElement?.textContent || ''
    // //title, salary, location,jobtype and companyname

    //         return {
    //           title,
    //           companyName,
    //           companyLink,
    //           location,
    //           salary,
    //           // jobType,
    //           applyLink,
    //           description
    //         }
    //       })
    //     })
    // const title = await page.waitForSelector('div.jobsearch-JobInfoHeader-title-container h1 span')
    // const te = title?.evaluate(e => e.textContent)
    const titleElement = await page.waitForSelector('div.jobsearch-JobInfoHeader-title-container h1 span');
    const companyElement = await page.waitForSelector(' div[data-testid="inlineHeader-companyName"] > span > a')
    const locationElement = await page.waitForSelector('div[data-testid="inlineHeader-companyLocation"] > div')
    console.log(companyElement, "companyElement", locationElement)
    const salaryAndJobElement =await page.waitForSelector('div[data-testid="jobsearch-OtherJobDetailsContainer"] > div > div')
    const applyLinkElement =await page.waitForSelector('#applyButtonLinkContainer > div > div > button')
    const descriptionElement =await page.waitForSelector('#jobDescriptionText')

    const title = await titleElement?.evaluate(element => element.textContent)
    const companyName = await companyElement?.evaluate(element => element.textContent)
    const companyLink = await companyElement?.evaluate(element => element.getAttribute('href'))
    const location = await locationElement?.evaluate(element => element.textContent)
    const salary = salaryAndJobElement
    // const jobType = salaryAndJobElement[1].textContent || ''
    const applyLink = await applyLinkElement?.evaluate(element => element.getAttribute('href'))
    const description = await descriptionElement?.evaluate(element => element.textContent)
    await page.close()
    return {
                title,
                companyName,
                companyLink,
                location,
                salary,
                // jobType,
                applyLink,
                description
              }
  }
}

export default WebScraper;
