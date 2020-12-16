const axios = require('axios');

axios.get('http://127.0.0.1:5000')
  .then(function (response){
    console.log(response);
  })