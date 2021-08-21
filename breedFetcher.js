const request = require('request'); // request library
const input = process.argv.slice(2); // accept CLI arguments
const catName = input[0]

const catFetcher = function(catName) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${catName}&limit=1`, (error, response, body) => {
    // console.log('body:', body); // Print the HTML for the Google homepage.
    // console.log(typeof body)
    // console.log('Above: before parse | Below: after parse')
    const data = JSON.parse(body)
    // console.log(data)
    // console.log(typeof data)
    // console.log('----------')
    console.log(data[0].description)
  });
}

catFetcher(catName)