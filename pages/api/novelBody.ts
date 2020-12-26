import type { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer'

const novelBody = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { novelId, pageNumber } = req.body;
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(`https://ncode.syosetu.com/${novelId}/${pageNumber}/`, { waitUntil: "domcontentloaded" });
        const elm = await page.$('#novel_honbun');
        const text = await elm?.getProperty('textContent');
        const textJson = await text?.jsonValue() as string;
        const textList = textJson.split(/[\r\n]+/);
        await browser.close();
        res.status(200).json({
            lines: textList
        });
    } catch {
        res.status(500).end();
    }
}

export default novelBody;
