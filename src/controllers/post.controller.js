    // src/controllers/post.controller.js
    import * as postService from '../services/post.service.js';

    export const getAllPosts = async (req, res) => {
        try {
            const posts = await postService.getAllPosts();
            res.json(posts);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving posts', error: error.message });
        }
    };

    // (Apply the same async/await and try/catch pattern to all other controller functions:
    // getPostById, createPost, updatePost, partiallyUpdatePost, and deletePost)