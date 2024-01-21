import axios, { AxiosInstance, AxiosResponse } from 'axios';

export interface IRepository {
  full_name: string;
  html_url: string;
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

  async getUserRepositories(user: string): Promise<IRepository[]> {
    try {
      const response: AxiosResponse = await this.axiosClient.get(`/users/${user}/repos`, {
        params: {
          per_page: 10,
        },
      });

      const formattedData: IRepository[] = response.data.map(
        ({ full_name, html_url }: { full_name: string; html_url: string }) => ({
          full_name,
          html_url,
        })
      );

      return formattedData;
    } catch (error:any) {
      throw new Error(error.message);
    }
  }
}

export default UserRepositoriesService;
