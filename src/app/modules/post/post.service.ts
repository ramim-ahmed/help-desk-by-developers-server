import { Post, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const createPost = async (data: Post): Promise<Post> => {
  const result = await prisma.post.create({ data });
  return result;
};

const getAllPosts = async (): Promise<Post[] | null> => {
  const result = await prisma.post.findMany();
  return result;
};

export const PostService = {
  createPost,
  getAllPosts,
};
