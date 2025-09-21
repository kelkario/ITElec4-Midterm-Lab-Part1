// src/controllers/comment.controller.js
import * as commentService from '../services/comment.service.js';

export const getAllComments = (req, res) => {
    const comments = commentService.getAllComments();
    res.json(comments);
};

export const getCommentsByPostId = (req, res) => {
    const postId = parseInt(req.params.postId, 10);
    const comments = commentService.getCommentsByPostId(postId);
    res.json(comments);
};

export const createCommentForPost = asyncHandler(async (req, res) => {
    const { postId } = req.params;
    const { content, authorId } = req.body;

    const newComment = await commentService.createCommentForPost(postId, {
        content,
        authorId,
    });

    return res
        .status(201)
        .json(new ApiResponse(201, newComment, "Comment created successfully"));
});