const request = require('request');
const cheerio = require('cheerio');

request('https://www.webscraper.io/test-sites/e-commerce/allinone', (error, response, html) => {
    if( !error && response.statusCode == 200){
        const $ = cheerio.load(html)

        const siteHeading = $('.navbar-header');
        
        console.log(siteHeading.html());//to get html elements
        console.log(siteHeading.text());//to get text in that <div> class

        const output = siteHeading.find('h1').text();//to get text from a paticular element "h1"
        const output = siteHeading.children('h1').text();//to get text from h1 in children elements

        $(x).each((i, el) => {      //for looping in an element x and printing all it's attributes
            const item = $(el).text();
            const link = $(el).attr('href'); //for finding a particular attribute(links here)

            console.log(item)
            console.log(link)
        })

        console.log(output);
    }
    else{
        console.log(error);
    }
});