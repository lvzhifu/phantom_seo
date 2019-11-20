const httpd = require("http");
const url  = require("url");
// const phantom = require('phantom');
const puppeteer = require('puppeteer');

//创建服务
httpd.createServer(async (req,res)=>{
    if(req.url.indexOf('.') > -1 && req.url.indexOf('.html') < 0) {
        res.end()    
        return
    }
    const userAgent = req.headers["user-agent"]
    let myUrl = url.parse(req.url, true); 
    try {
        const browser = await puppeteer.launch({timeout: 50000000, args: ['--no-sandbox']});
        const page = await browser.newPage();
        page.waitForNavigation({timeout: 48000000})
        // await page.goto('http://localhost/merchant'+ myUrl.search, {waitUntil: 'networkidle0'});
        await page.goto('https://www.gaietysg.com/merchant'+ myUrl.search, {waitUntil: 'networkidle0'});
        // await page.goto('http://sg-preview.linkerdeals.com/merchant'+ myUrl.search, {waitUntil: 'networkidle0'});
        //  await page.goto('https://www.baidu.com/', {waitUntil: 'networkidle0'});
        // await page.goto('http://sg-qa.bysrd.cn/merchant'+ myUrl.search, {waitUntil: 'networkidle0'});
        const html = await page.content(); // serialized HTML of page DOM.
        await browser.close();
        res.write(html);
    } catch (e) {
        console.log(e)
    }
    res.end()
}).listen(7777, '0.0.0.0');
console.log('runing......')