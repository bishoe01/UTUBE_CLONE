import express from "express";
//const express = require("express");
const PORT = 4000;

const app = express();

const gossipMiddleware = (req, res, next) => {
    console.log(`someone is going to : ${req.url}`);
    next();     
};

const handleHome = (req, res, next) => {
    return res.send("<h1>I STILL LOVE YOU<h1>");
}
const handleLogin = (req, res) => {
    return res.send("login Here");
}

app.get("/" , gossipMiddleware,handleHome);
app.get("/login", gossipMiddleware,handleLogin);



const handleListening = () => console.log(`server Listening on port ${PORT}🚀`);

app.listen(PORT, handleListening);

