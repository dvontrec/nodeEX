// import dotenv
require('dotenv').config();
// import fetch
const fetch = require('node-fetch');
// install express
const express = require("express");
// import body-parser
const bodyParser = require("body-parser")
// create app
let app = express()
// use bodyparser
app.use(bodyParser.urlencoded({extended:true}));




// Grab the port number
PORT = process.env.PORT
// grab username and password
FAKEPASSWORD = process.env.FAKEPASSWORD
FAKEUSERNAME = process.env.FAKEUSERNAME
app.get("/", (req, res) => {
    res.send(`<h1>Login Page</h1>

    <form action="/login" method="POST">
        <input type="text" name="username" placeholder="username">
        <input type="password" name="password" placeholder="password">
        <button>Submit</button>
    </form>`);
});
app.get("/random", (req, res) =>{
    console.log("New request");
    // fetch from url
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(body => {
        res.send(body.results[0]);
    });
});
app.post("/login", (req, res) =>{
    let username = req.body.username;
    let password = req.body.password;
    if(username == FAKEUSERNAME && password == FAKEPASSWORD){
        return res.send("Logged in!");
    }
    res.send(username);

});

console.log("I am working");
app.listen(PORT, console.log("Listening on port: ", PORT));
