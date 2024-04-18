import { Post, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const createPost = async (data: Post): Promise<Post> => {
  const result = await prisma.post.create({ data });
  return result;
};

const getAllPosts = async (): Promise<Post[] | null> => {
  const result = await prisma.post.findMany({
    orderBy: {
      createAt: 'desc',
    },
    include: {
      Comment: {
        orderBy: {
          createAt: 'desc',
        },
      },
      Like: true,
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          avatar: true,
        },
      },
      platform: true,
      postType: true,
    },
  });
  return result;
};

export const PostService = {
  createPost,
  getAllPosts,
};
