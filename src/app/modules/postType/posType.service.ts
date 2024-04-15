import { PostType, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const createPostType = async (data: PostType): Promise<PostType> => {
  const result = await prisma.postType.create({ data });
  return result;
};

export const PostTypeService = {
  createPostType,
};
