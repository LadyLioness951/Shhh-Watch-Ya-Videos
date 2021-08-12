const Upload = require('../../models/upload');

module.exports = {
    create,
    update,
    delete: deleteComment
}

async function create(req, res) {
    Upload.findOne({'upload._id': req.params.id}, function(err, upload) {
        let upload = await upload.id(req.params.id); // ?
        req.body.user = req.user._id;
        upload.comments.push(req.body);
        upload.save(function(err) {
            if (err) console.log(err);
            res.redirect(`/upload/${upload._id}`);
        });
    });
}

async function update(req, res) {
    Upload.findOne({'upload._id': req.params.uploadId}, function(err, upload) {
        let upload = await upload.id(req.params.id) // ?
        let comment = await upload.comments.id(req.params.commentId);
        if (!comment.user.equals(req.user._id)) return res.redirect(`/uploads/${upload._id}`);
        comment.content = req.body.content;
        upload.save(function(err) {
            res.redirect(`/uploads/${upload._id}`);
        });
    });
}

async function deleteComment(req, res) {
    Upload.findOne({'upload._id': req.params.uploadId}, function(err, upload) {
        let upload = await upload.id(req.params.id); // ?
        if (!upload || err) return res.redirect(`/uploads/${upload._id}`);
        upload.comments.remove(req.params.commentId);
        upload.save(function(err) {
            res.redirect(`/uploads/${upload._id}`);
        });
    });    
}