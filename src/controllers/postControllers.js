const Posts = require('../models/posts');


module.exports = {
    async list(req, res) {
        try {
            const posts = await Posts.findAll()
            return res.json(posts);
        } catch (err) {
            return console.error({ error: err.message });
        }
    },
    async create(req, res) {
        const { title, body } = req.body;
        try {

            const posts = await Posts.create({ title, body });
            return res.json(posts);

        } catch (error) {
            return console.error({ error: err.message });
        }
    },
    async show(req, res) {
        try {

            const posts = await Posts.findAll({ where: { id: req.params.id } });

            const comment = await Comment.findAll({ where: { postId: req.params.id } })

            return res.json({ posts, comment });

        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },
}