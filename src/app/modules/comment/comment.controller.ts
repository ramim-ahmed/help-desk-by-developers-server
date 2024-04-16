import { Request, Response } from 'express';
import { CommentService } from './comment.service';
import httpStatus from 'http-status';

const createComment = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await CommentService.createComment(data);
    res.status(httpStatus.OK).json({
      success: true,
      message: 'Comment is success!',
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: 'Comment is failed!',
      error,
    });
  }
};

export const CommentController = {
  createComment,
};
