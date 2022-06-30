import express, { response } from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
//const express = require("express");
const PORT = 4000;

const app = express();
const logger = morgan("dev");


app.use(logger);

app.use("/",globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);



const handleListening = () => console.log(`server Listening on port ${PORT}🚀`);

app.listen(PORT, handleListening);

