const Upload = require('../../models/upload');

module.exports = {
    create,
    delete: deleteComment
}

async function create(req, res) {
    let upload = await Upload.findById(req.params.id);
    req.body.user = req.user._id;
    upload.comments.push(req.body);
    await upload.save();
    res.json(upload);
}

async function deleteComment(req, res) {
     // Note the cool "dot" syntax to query on the property of a subdoc
    const upload = Upload.findOne({'comments._id': req.params.id, 'comments.userId': req.user._id});
    upload.comment.remove(req.params.commentId);
    await upload.save();
    res.json(upload);   
}
