const request = require('request');

const breedName = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

  if (error) {
    console.log('Request Failed');   //Edge Case: Request Failed
  } else {
    const data = JSON.parse(body);

    if (data.length !== 0) {
      console.log(data[0].description);
    } else {
      console.log('Breed Not Found');   //Edge Case:  if the requested breed is not found.
    }

  }
  
});