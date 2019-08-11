const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('post.csv'); //file name that you want to write in

writeStream.write(`Title, Link, Date \n`)

request('https://www.webscraper.io/test-sites/e-commerce/allinone', (error, response, html) => {
    if( !error && response.statusCode == 200){
        const $ = cheerio.load(html)

        $('.x').each((i, el) => {
            const title = $(el)
            .find('h1')
            .text()
            .replace(/\s\s+/, ''); //to remove whitespace between h1's
            
            const link = $(el)
            .find('a')
            .attr('href'); // to find links in the webpage

            const date = $(el)
            .find('.post-date')
            .text()
            .replace(/,/, ' '); // to replace , with space

            console.log(title, link, date); //for console
            writeStream.write(`${title}, ${link}, ${date} \n`) // writing in the file
        });
    console.log("Scraping Done!");
    
    }
    });
