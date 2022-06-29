import express, { response } from "express";
import morgan from "morgan";
//const express = require("express");
const PORT = 4000;

const app = express();
const logger = morgan("dev");

const globalRouter = express.Router();
const userRouter= express.Router();
const videoRouter = express.Router();
const handleHome = (req, res) => {
    res.send("Home");
}
const handleEditUser = (req, res) => {
    res.send("Edit User");
}
const handleWatchVideos = (req, res) => {
    res.send("Watch Video");
}
globalRouter.get('/', handleHome);
userRouter.get('/edit', handleEditUser);
videoRouter.get("/watch", handleWatchVideos);

app.use(logger);

app.use("/",globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);



const handleListening = () => console.log(`server Listening on port ${PORT}🚀`);

app.listen(PORT, handleListening);

