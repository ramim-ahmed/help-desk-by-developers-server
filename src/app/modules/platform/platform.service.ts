import { Platform, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const createPlatform = async (data: Platform): Promise<Platform> => {
  const result = await prisma.platform.create({ data });
  return result;
};

export const PlatformService = {
  createPlatform,
};
