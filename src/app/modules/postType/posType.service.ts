import { PostType, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const createPostType = async (data: PostType): Promise<PostType> => {
  const result = await prisma.postType.create({ data });
  return result;
};

const getAllPostTypes = async (): Promise<PostType[]> => {
  const result = await prisma.postType.findMany({
    orderBy: {
      createAt: 'desc',
    },
  });
  return result;
};

export const PostTypeService = {
  createPostType,
  getAllPostTypes,
};
