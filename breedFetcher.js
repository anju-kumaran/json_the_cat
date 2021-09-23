const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  let desc = null;

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (error) {

      //Edge Case: Request Failed
      error = 'Request Failed';

      callback(error, desc);
       
    } else {

      const data = JSON.parse(body);

      if (data.length !== 0) {

        desc = data[0].description;
        
      } else {

        //Edge Case:  if the requested breed is not found.
        error = 'Breed Not Found';

      }
      callback(error, desc);

    }
    
  });

};

module.exports = {
  fetchBreedDescription
};