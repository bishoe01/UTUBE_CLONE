import Video from "../models/Video";
//Video.find({},(error, videos) => {})
export const home = async(req, res) => {
    const videos = await Video.find({});
    console.log(videos);
        return res.render("home",{pageTitle: "Home", videos});
    };
export const watch = async(req, res) => {
    const { id } = req.params;
    const video = await Video.findById(id);
    if(!video){
        return res.render("404",{pageTitle:"Video not found",errorMessage: "Not Found"});
    }
    return res.render("watch",{pageTitle : `${video.title}`, video})};
export const getEdit = async(req, res) => {
    const { id } = req.params;
    const video = await Video.findById(id);
    if(!video){
        return res.render("404",{pageTitle:"Video not found",errorMessage: "Not Found"});
    }
    return res.render("edit",{pageTitle : `Edit ${video.title}`, video})};
export const postEdit = async(req,res) => {
    const { id } = req.params;
    const {title, description,hashtags} = req.body;
    const video = await Video.findById(id);
    if(!video){
        return res.render("404",{pageTitle:"Video not found",errorMessage: "Not Found"})
    }
    video.title = title;
    video.description = description;
    video.hashtags = hashtags.split(',').map((hashtag) => hashtag.startsWith("#") ? hashtag : `#${hashtag}`);
    await video.save();
    return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
    return res.render("upload",{pageTitle : `Upload Video`});    
};
export const postUpload = async(req, res) => {
    const {title, description, hashtags} = req.body;
    try{
        await Video.create({
            title,
            description,
            hashtags : hashtags.split(',').map(hashtag =>`#${hashtag}`),
            meta:{
                views:1,
                rating:1,
            },
            
        });
    return res.redirect("/");

    }catch(error){
        return res.render("upload",{pageTitle : `Upload Video`, errorMessage : error._message});    
    }
};
