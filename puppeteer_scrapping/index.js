const puppeteer = require('puppeteer')

const scrapper = async()=>{
let productLink = 'https://www.flipkart.com/realme-x2-pearl-green-128-gb/p/itm75023903eb431'
let browser = await puppeteer.launch({headless:false})
let page = await browser.newPage()

await page.goto(productLink,{waitUntil:'networkidle2'})

let data = await page.evaluate(()=>{
    if(document.querySelector('button[class="_2AkmmA _2Npkh4 _2kuvG8 _7UHT_c"]')!=null){
        let title = document.querySelector('button[class="_2AkmmA _2Npkh4 _2kuvG8 _7UHT_c"]').innerText
        return (title)
    }
    else{
        return false
    }
        
}) 
if(data){
        console.log('IN STOCK')
}else{
        console.log('NOT IN STOCK')
}
await browser.close()
}
scrapper()