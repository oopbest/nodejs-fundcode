const rquest = require('request')
const cheerio = require('cheerio')
const request = require('request')
const argv = process.argv[2]

request('https://codequiz.azurewebsites.net/',{
    headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11',
        'Cookie': 'hasCookie=true',
        'Accept': '/',
        'Connection': 'keep-alive'
    }
},(error, response, html) => {
    if(!error && response.statusCode == 200){
        const $ = cheerio.load(html)
        let selectorStr = `table td:contains(${argv})`
        $(selectorStr).next().text(function(){
            console.log($(this).text())
        });
    }else{
        console.log('error')
    }
})