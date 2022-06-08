const Path = require('path');
const express = require ('express');
const {
    resolve
} = require ('path');
const app = express ()
const port = 3000
const axios = require('axios').default;
const fs = require('fs');
i = 99;
while (i < 600) {
    axios({
        method: 'get',
        url: 'https://http/' + i + '.jpg',
        responseType: 'stream'
    }).then(function (response) {
        response.data.pipe(fs.createWriteStream(i + '.jpg'));
    })
    .catch(function (error) {
        // handel error
        console.log(error);
    })

    i++;
} 