import { PrismaClient, User } from '@prisma/client';
const prisma = new PrismaClient();
const createUser = async (data: User): Promise<User> => {
  const result = await prisma.user.create({ data });
  return result;
};

const getAllUsers = async (): Promise<Partial<User>[]> => {
  const result = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      avatar: true,
    },
  });
  return result;
};

export const UserService = {
  createUser,
  getAllUsers,
};
