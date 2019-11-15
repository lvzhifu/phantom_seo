const httpd = require("http");
const url  = require("url");
// const phantom = require('phantom');
const puppeteer = require('puppeteer');

//创建服务
httpd.createServer(async (req,res)=>{
    console.log(req.url)
    console.log(req.url.indexOf('.'))
    if(req.url.indexOf('.') > -1 && req.url.indexOf('.html') < 0) {
        console.log('进入判断')
        res.end()    
        return
    }
    const userAgent = req.headers["user-agent"]
    console.log(userAgent)
    let myUrl = url.parse(req.url, true); 
    console.log(myUrl)
    try {
        const browser = await puppeteer.launch({headless: true, timeout: 0, args: ['--no-sandbox']});
        const page = await browser.newPage();
        // await page.goto('http://sg-preview.linkerdeals.com/'+ myUrl.path, {waitUntil: 'networkidle0'});
        await page.goto('https://sg-qa.bysrd.cn/merchant'+ myUrl.search, {waitUntil: 'networkidle0'});
        const html = await page.content(); // serialized HTML of page DOM.
        await browser.close();
        res.write(html);
    } catch (e) {
        console.log(e)
    }
    res.end()
}).listen(7777, '0.0.0.0');
console.log('runing......')