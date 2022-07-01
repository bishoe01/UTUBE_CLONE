import express from 'express';
import { edit , see ,deleteVideo,uploadVideo } from '../controllers/videoController';
const videoRouter = express.Router();


videoRouter.get("/:id(\\d+)", see);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);
videoRouter.get("/upload", uploadVideo);
export default videoRouter;