import express, { response } from "express";
import morgan from "morgan";
//const express = require("express");
const PORT = 4000;

const app = express();
const logger = morgan("dev");

const handleHome = (req, res) => {
    return res.send("<h1>I STILL LOVE YOU<h1>");
}
const handleLogin = (req, res) => {
    return res.send("<h1>Login</h1>");
}

const handleProtected = (req, res) => {
    return res.send("<h1>Welcome to the private Lounge</h1>");
}
app.use(logger);
app.get("/",handleHome);
app.get("/login",handleLogin);
app.get("/protected",handleProtected);


const handleListening = () => console.log(`server Listening on port ${PORT}🚀`);

app.listen(PORT, handleListening);

