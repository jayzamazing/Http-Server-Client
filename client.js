//import unirest
var unirest = require('unirest');
/*
* Function to get the headers from the server
*/
unirest.get('http://127.0.0.1:8080/headers').end(function(response) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', response.headers);
  console.log('Body', response.body);
});
/*
* Function to get only the host info from the server
*/
unirest.get('http://127.0.0.1:8080/headers/host').end(function(response) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', response.headers);
  console.log('Body', response.body);
});
/*
* Function to get the http version
*/
unirest.get('http://127.0.0.1:8080/version').end(function(response) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', response.headers);
  console.log('Body', response.body);
});
