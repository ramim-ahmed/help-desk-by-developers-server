import { Request, Response } from 'express';
import { PlatformService } from './platform.service';
import httpStatus from 'http-status';

const createPlatform = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await PlatformService.createPlatform(data);
    res.status(httpStatus.OK).json({
      success: true,
      message: 'platform is created successfully!',
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: 'platform is created failed!',
      error,
    });
  }
};

const getAllPlatforms = async (req: Request, res: Response) => {
  try {
    const result = await PlatformService.getAllPlatforms();
    res.status(httpStatus.OK).json({
      success: true,
      message: 'Platform is fetch successfully!',
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: 'Platform is fetch failed!',
      error,
    });
  }
};

export const PlatformController = {
  createPlatform,
  getAllPlatforms,
};
