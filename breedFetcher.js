const request = require('request'); // request library
const input = process.argv.slice(2); // accept CLI arguments
const catName = input[0]

// console.log(input)
// console.log(catName)

const catFetcher = function(catName) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${catName}&limit=1`, (error, response, body) => {
    // console.log(error)
    // console.log(response.statusCode)
    // console.log('body:', body);
    if (error) { // Edge case: broken URL
      console.log(error)
      return
    }
    if (body === '[]') { // Edge case: invalid cat name
      console.log('No Cats Found')
      return 
    }
    // console.log(typeof body) = string
    // console.log('Above: before parse | Below: after parse')
    const data = JSON.parse(body)
// *** Potential Edge Case Alternative for No Cats Found, if the 'body' array (object) is empty
    // if (data.length === 0) { // body is 
    //   console.log('No Cats Found')
    //   return 
    // }

    // console.log(data)
    // console.log(data) = object
    // console.log(typeof data)
    // console.log('----------')
    console.log(data[0].description)
  });
}
catFetcher(catName)