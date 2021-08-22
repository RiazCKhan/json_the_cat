const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc /* response */) => { // the request callback will always be error, response, body
  if (error) { // therefore the desc is actually the response parameter
    console.log('Error fetch details:', error); // to access the description via the 'response' parameter - it is response.body, i.e., desc.body
  } else {
    const data = JSON.parse(desc.body); // this turns the string into an object
    console.log(data[0].description); // this enters the array that holds the object, at the description key to provide the desired value
  }
});