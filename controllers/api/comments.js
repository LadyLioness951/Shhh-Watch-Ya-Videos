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
    Upload.findOne({'upload._id': req.params.uploadId}, function(err, upload) {
        let upload = await Upload.findById(req.params.id) 
        let comment = await upload.comments.findById(req.params.commentId);
        if (!comment.user.equals(req.user._id)) return res.json(upload);
        comment.content = req.body.content;
        upload.save(function(err) {
            res.json(comment);
        });
    });
}

async function deleteComment(req, res) {
    Upload.findOne({'upload._id': req.params.uploadId}, function(err, upload) {
        let upload = await Upload.findById(req.params.id);
        if (!upload || err) return res.json();
        upload.comments.remove(req.params.commentId);
        upload.save(function(err) {
            res.json(upload);
        });
    });    
}