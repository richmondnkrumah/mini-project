import WebScraper from "@/utils/scraper";

export async function POST(request: Request) {
  // Get the Form Data
  const formData = await request.formData();
  const jobUrl = formData.get('jobUrl') as string | null;

  if (!jobUrl) {
    return new Response(JSON.stringify({ data: null, error: 'Job title is required' }), { status: 400 });
  }
  console.log(jobUrl, "data  URL sent to server");

  const scraper = new WebScraper();
  await scraper.init();

  try {
    const results = await scraper.getIndeedJobDetails(jobUrl);
    console.log(results, "this is results from server");
    return Response.json({ data: results, error: null });
  } catch (error) {
    console.log(error, "Error from server");
    return Response.json({ data: null, error: "Error Wrong with the Scraping"},{status: 500,});
  } finally {
    await scraper.close();
  }
}