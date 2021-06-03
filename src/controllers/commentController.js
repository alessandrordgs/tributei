const Comments = require('../models/comments');
 module.exports = {
     async list(req, res) {
         try {
             const comments = await Comments.findAll()

             return res.json(comments);

         } catch (err) {
             return console.error({ error: err.message });
         }
     },
     async create(req, res) {
         const { postId } = req.params;
        const { message, postId } = req.body;
        try {
            const posts = await Posts.create({  message ,postId  });
            return res.json(posts);

        } catch (error) {
            return console.error({ error: err.message });
        }
    },
 }