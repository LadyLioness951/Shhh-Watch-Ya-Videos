const Upload = require('../../models/upload');

module.exports = {
    create,
    update,
    delete: deleteComment
}

async function create(req, res) {
    let upload = await Upload.findById(req.params.id);
    req.body.user = req.user._id;
    upload.comments.push(req.body);
    await upload.save();
    res.json(upload);
}

async function update(req, res) {
    let upload = await Upload.findOne(req.params.id);
    req.body.user = req.user._id;
    upload.comments.push(req.body);
    await upload.save();
    res.json(upload);
}

async function deleteComment(req, res) {
    let upload = await Upload.findOne(req.params.Id);
    req.body.user = req.user._id;
    upload.comment.remove(req.params.commentId);
    await upload.save();
    res.json(upload);   
}
