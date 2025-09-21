import * as userService from '../services/user.service.js';
import ApiResponse from '../utils/ApiResponse.js';
import asyncHandler from '../utils/asyncHandler.js';

export const createUser = asyncHandler(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(201).json(new ApiResponse(201, user, 'User created'));
});

export const getUserById = asyncHandler(async (req, res) => {
  const user = await userService.getUserById(req.params.id);
  res.json(new ApiResponse(200, user));
});

export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await userService.getAllUsers();
  res.json(new ApiResponse(200, users));
});

export const getPostsByUser = asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.userId, 10);
    const posts = await postService.getPostsByAuthorId(userId);

    return res
        .status(200)
        .json(new ApiResponse(200, posts, "Posts retrieved successfully"));
});