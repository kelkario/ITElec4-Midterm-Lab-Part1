// src/controllers/post.controller.js
import * as postService from '../services/post.service.js';

// ... (keep getAllPosts, getPostById, createPost, updatePost)

// *** NEW CONTROLLER FUNCTION FOR PATCH ***
export const partiallyUpdatePost = (req, res) => {
    const postId = parseInt(req.params.id, 10);
    // req.body will contain the fields to update, e.g., { title: "New Title" }
    const post = postService.partiallyUpdatePost(postId, req.body);
    if (!post) {
        return res.status(404).json({ message: 'Post not found.' });
    }
    res.json(post);
};

export const deletePost = (req, res) => {
    // ... (keep this function as is)
};