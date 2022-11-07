const fetch = require('node-fetch');

const url = "https://jsonplaceholder.typicode.com/users"

fetch(url).then(r => {
    console.log(r);
});
    
