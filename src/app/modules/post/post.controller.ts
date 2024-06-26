import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { PostService } from './post.service';

const createPost = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await PostService.createPost(data);
    res.status(httpStatus.OK).json({
      success: true,
      message: 'Post is created successfully!',
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: 'Post is created failed!',
      error,
    });
  }
};
const getAllPosts = async (req: Request, res: Response) => {
  try {
    const result = await PostService.getAllPosts();
    res.status(httpStatus.OK).json({
      success: true,
      message: 'Posts is fetch successfully!',
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: 'Post is fetch failed!',
      error,
    });
  }
};
export const PostController = {
  createPost,
  getAllPosts,
};
