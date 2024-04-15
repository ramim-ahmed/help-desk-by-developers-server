import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { PostTypeService } from './posType.service';
const createPostType = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await PostTypeService.createPostType(data);
    res.status(httpStatus.OK).json({
      success: true,
      message: 'PostType is created successfully!',
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: 'PostType is created failed!',
      error,
    });
  }
};

export const PostTypeController = {
  createPostType,
};
