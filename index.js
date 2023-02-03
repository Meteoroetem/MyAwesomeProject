const {readFile, readFileSync} = require('fs');
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (request, response)=>{
    readFile('./public/Home.html','utf8', (err, html)=>{
        if (err){
            response.status(500).send("Sorry, server error 8-(")
        }
        response.send(html)
    })
});

app.listen(process.env.PORT || 3000, ()=>console.log("Running on port http://localhost:3000"));