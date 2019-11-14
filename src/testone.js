const httpd = require("http");
const url  = require("url");
const phantom = require('phantom');
const puppeteer = require('puppeteer');
let lateTime = ( time ) =>{
    return new Promise( function(resolve,reject){
        setTimeout(function(){
            resolve();
        }, time );
    } );
}

//创建服务
httpd.createServer(async (req,res)=>{
    if(req.url.indexOf('.') > -1) {
        res.end()    
        return
    }
    console.log(req)
    const userAgent = req.headers["user-agent"]
    let myUrl = url.parse(req.url, true); 
    console.log(myUrl)
    console.log(req)
    // try {
    //     console.log('jle')
    //     const browser = await puppeteer.launch({headless: true, timeout: 0});
    //     console.log('jle1')
    //     const page = await browser.newPage();
    //     console.log('jle2')
    //     await page.goto('https://sg-qa.bysrd.cn/merchant?id=295', {waitUntil: 'networkidle0'});
    //     console.log('jle3')
    //     const html = await page.content(); // serialized HTML of page DOM.
    //     await browser.close();
    //     console.log(html);
    //     res.write(html);
    // } catch (e) {
    //     console.log(e)
    // }
    
    // return html;
    // const userAgent = req.headers["user-agent"]
    // let myUrl = url.parse(req.url, true); 
    // console.log(myUrl)
    // console.log(req.url)
    // // console.log(req)
    // console.log(req.protocol)
    // console.log(req.hostname)
    // console.log(req.originalUrl)
    // // console.log(req)
    // console.log(req.headers["user-agent"])
//     qihoobot|Baiduspider|Googlebot|Googlebot-Mobile|Googlebot-Image|Mediapartners-Google|Adsbot-Google|Feedfetcher-Google|Yahoo! Slurp|Yahoo! Slurp China|YoudaoBot|Sosospider|Sogou
//  spider|Sogou web spider|MSNBot|ia_archiver|Tomato Bot
// Baiduspider|twitterbot|facebookexternalhit|rogerbot|linkedinbot|embedly|quora link preview|showyoubot|outbrain|pinterest|slackbot|vkShare|W3C_Validator|bingbot|Sosospider|Sogou Pic Spider|Googlebot|360Spider
    // if (userAgent.indexOf())
    // const instance = await phantom.create();
    // const page = await instance.createPage();
    // await page.on('onResourceRequested', function(requestData) {
    //     console.info('Requesting', requestData.url);
    // });
    // const status = await page.open('https://sg-qa.bysrd.cn/merchant?id=303');
    // console.log(status)
    // await lateTime(500);
    // let result = await page.evaluate(function() {
    //     // console.log(document)
    //     return  $(".yz-layout")
    // });
    // console.log(result)
    // const content = await page.property('content');
    // console.log(content)
    // res.write("暂时test");
    res.write('ad');
    res.end()
    // await instance.exit();
}).listen(7777, '0.0.0.0');
console.log('runing......')