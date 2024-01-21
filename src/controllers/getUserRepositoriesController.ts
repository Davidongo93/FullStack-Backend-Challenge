import UserRepositoriesService , { IRepository } from "../services/userRepositoriesService";

const token: string | undefined = process.env.GITHUB_ACCESS_TOKEN;
const userRepositoriesService = new UserRepositoriesService(token || '');

const getUserRepositories = async (user: string): Promise<IRepository[]> => {
  try {
    return await userRepositoriesService.getUserRepositories(user);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default getUserRepositories;
