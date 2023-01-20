import axios, { AxiosInstance } from "axios";
import { parseCookies } from "nookies";


export class APIClient {

  public api: AxiosInstance
  private static instance: APIClient;

  constructor(ctx?: any) {

    const { 'nextauth.token': token } = parseCookies(ctx)

    this.api = axios.create({
      baseURL: process.env.API_URL || 'http://localhost:3333'
    })

    this.api.interceptors.request.use(config => {
      return config;
    })

    if (token) {
      this.api.defaults.headers['Authorization'] = `Bearer ${token}`;
    }
  }

  static getInstance(ctx?: any): APIClient {
    if (!this.instance) {
      this.instance = new this(ctx);
    }

    return this.instance;
  }

  public async getAsyncData<T>(url: string): Promise<T> {
    try {
      const result = await this.api.get(url)
      const data = result.data;

      return data

    } catch (error) {
      console.log(error);
    }
  }
}
