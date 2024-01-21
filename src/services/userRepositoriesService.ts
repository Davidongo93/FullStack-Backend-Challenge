import axios, { AxiosInstance, AxiosResponse } from 'axios';

export interface IRepository {
  fullName: string;
  htmlUrl: string;
}

class UserRepositoriesService {
  private axiosClient: AxiosInstance;

  constructor(token: string) {
    this.axiosClient = axios.create({
      baseURL: 'https://api.github.com',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  private mapRepository(responseData: any): IRepository {
    return {
      fullName: responseData.full_name,
      htmlUrl: responseData.html_url,
    };
  }

  async getUserRepositories(user: string): Promise<IRepository[]> {
    try {
      const response: AxiosResponse = await this.axiosClient.get(`/users/${user}/repos`, {
        params: {
          per_page: 10,
        },
      });

      const formattedData: IRepository[] = response.data.map(this.mapRepository);

      return formattedData;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}

export default UserRepositoriesService;
