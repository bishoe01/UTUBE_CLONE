
export const trending = (req, res) => res.render("home");
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => {
    console.log(req.params);
    return res.send("Edit video")};
export const search = (req, res) => {res.send("Search videos")};
export const uploadVideo = (req, res) => {res.send("Upload video")};
export const deleteVideo = (req, res) => {res.send("Delete video")};