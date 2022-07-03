import express from 'express';
import { edit , watch ,deleteVideo,uploadVideo } from '../controllers/videoController';
const videoRouter = express.Router();


videoRouter.get("/:id(\\d+)", watch);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);
videoRouter.get("/upload", uploadVideo);



export default videoRouter;