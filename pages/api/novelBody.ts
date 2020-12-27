import type { NextApiRequest, NextApiResponse } from 'next';
// import puppeteer from 'puppeteer';
// import chromium from 'chrome-aws-lambda';
// import puppeteer from 'puppeteer-core';
import axios from 'axios';

const novelBody = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { novelId, pageNumber } = req.body;
        const response = await axios.get(`https://ncode.syosetu.com/${novelId}/${pageNumber}/`, {
            headers: { 'User-Agent': 'Chrome/86.0.4240.80' }
        });        
        res.status(200).json({
            lines: response.data
        });
    } catch (e) {
        res.status(500).send(e.stack);
    }
}

export default novelBody;
