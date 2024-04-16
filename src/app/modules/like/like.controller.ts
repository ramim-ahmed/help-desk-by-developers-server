import { Request, Response } from 'express';
import { LikeService } from './like.service';
import httpStatus from 'http-status';

const createLike = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await LikeService.createLike(data);
    res.status(httpStatus.OK).json({
      success: true,
      message: 'Like is success!',
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: 'Like is failed!',
      error,
    });
  }
};

export const LikeController = {
  createLike,
};
