import * as postService from "../services/post.service.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// CREATE
export const createPost = asyncHandler(async (req, res) => {
    const newPost = await postService.createPost(req.body);
    return res
        .status(201)
        .json(new ApiResponse(201, newPost, "Post created successfully"));
});

// UPDATE (PUT)
export const updatePost = asyncHandler(async (req, res) => {
    const postId = parseInt(req.params.id, 10);
    const post = await postService.updatePost(postId, req.body);

    if (!post) {
        return res.status(404).json({ message: "Post not found." });
    }

    return res
        .status(200)
        .json(new ApiResponse(200, post, "Post updated successfully"));
});

// PATCH (Partial Update)
export const partiallyUpdatePost = asyncHandler(async (req, res) => {
    const postId = parseInt(req.params.id, 10);
    const post = await postService.partiallyUpdatePost(postId, req.body);

    if (!post) {
        return res.status(404).json({ message: "Post not found." });
    }

    return res
        .status(200)
        .json(new ApiResponse(200, post, "Post partially updated successfully"));
});

// DELETE
export const deletePost = asyncHandler(async (req, res) => {
    const postId = parseInt(req.params.id, 10);
    const success = await postService.deletePost(postId);

    if (!success) {
        return res.status(404).json({ message: "Post not found." });
    }

    return res
        .status(204)
        .json(new ApiResponse(204, null, "Post deleted successfully"));
});
