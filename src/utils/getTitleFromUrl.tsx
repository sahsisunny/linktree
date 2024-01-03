import puppeteer from 'puppeteer'

export async function getPageTitleWithPuppeteer(
   url: string,
): Promise<string | undefined> {
   const browser = await puppeteer.launch({ headless: true }) // Set headless to true
   const page = await browser.newPage()

   await page.goto(url)

   const title = await page.title()

   await browser.close()
   return title
}
