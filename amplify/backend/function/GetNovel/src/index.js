// const chromium = require('chrome-aws-lambda') ;
// const puppeteer = require('puppeteer-core');

exports.handler = async (event) => {
    try {
        // const { novelId, pageNumber } = event;
        const novelId = 'n2267be';
        const pageNumber = 1;
        // const browser = await puppeteer.launch({
        //     args: chromium.args,
        //     defaultViewport: chromium.defaultViewport,
        //     executablePath: await chromium.executablePath,
        //     headless: chromium.headless,
        // });
        // const page = await browser.newPage();
        // await page.goto(`https://ncode.syosetu.com/${novelId}/${pageNumber}/`, { waitUntil: "domcontentloaded" });
        // const elm = await page.$('#novel_honbun');
        // const text = await elm.getProperty('textContent');
        // const textJson = await text.jsonValue();
        // const textList = textJson.split(/[\r\n]/);
        // await browser.close();
        const response = await axios.get(`https://ncode.syosetu.com/${novelId}/${pageNumber}/`, {
            headers: { 'User-Agent': 'Chrome/86.0.4240.80' }
        });  
        return {
            statusCode: 200,
            body: JSON.stringify(response.data),
        };
    } catch (e) {
        return {
            statusCode: 500,
            body: JSON.stringify(e.stack),
        };
    }
    // TODO implement
    // const response = {
    //     statusCode: 200,
    //     //  Uncomment below to enable CORS requests
    //     //  headers: {
    //     //      "Access-Control-Allow-Origin": "*",
    //     //      "Access-Control-Allow-Headers": "*"
    //     //  }, 
    //     body: JSON.stringify('Hello from Lambda!'),
    // };
    // return response;
};
