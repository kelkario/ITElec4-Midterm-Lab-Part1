 // src/controllers/post.controller.js
    import * as postService from '../services/post.service.js';
    import { ApiResponse } from '../utils/ApiResponse.js';

 export const getAllPosts = async (req, res) => {
    try {
        const posts = await postService.getAllPosts();
        return res
            .status(200)
            .json(new ApiResponse(200, posts, "Posts retrieved successfully"));
    } catch (error) {
            res.status(500).json({ message: 'Error retrieving posts', error: error.message });
        }
    };

export const getPostById = (req, res) => {
    const postId = parseInt(req.params.id, 10);
    const post = postService.getPostById(postId);
    if (!post) {
        return res.status(404).json({ message: 'Post not found.' });
    }
    res.json(post);
};

export const createPost = async (req, res) => {
    try {
        // The data is guaranteed to be valid here
        const newPost = await postService.createPost(req.body);
        return res
            .status(201)
            .json(new ApiResponse(201, newPost, "Post created successfully"));
    }
    const newPost = postService.createPost({ title, content });
    res.status(201).json(newPost);
};

export const updatePost = (req, res) => {
    const postId = parseInt(req.params.id, 10);
    const post = postService.updatePost(postId, req.body);
    if (!post) {
        return res.status(404).json({ message: 'Post not found.' });
    }
    res.json(post);
};


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
    const postId = parseInt(req.params.id, 10);
    const success = postService.deletePost(postId);
    if (!success) {
        return res.status(404).json({ message: 'Post not found.' });
    }
    res.status(204).send();
};