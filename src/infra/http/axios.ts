import axios, { AxiosInstance } from "axios";
import { parseCookies } from "nookies";


export class APIClient {

  public api: AxiosInstance
  private static instance: APIClient;

  constructor(ctx?: any) {

    console.log("New instance")

    this.api = axios.create({
      baseURL: process.env.API_URL || 'http://localhost:3333'
    })

    this.api.interceptors.request.use(config => {
      return config;
    })

    if (ctx) {
      const { 'nextauth.token': token } = parseCookies(ctx)
      this.setAuthorizationHeader(token)
    }
  }

  static getInstance(ctx?: any): APIClient {
    if (!this.instance || ctx) {
      this.instance = new this(ctx);
    }

    return this.instance;
  }

  get authorization() {
    return this.api.defaults.headers['Authorization']
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

  public setAuthorizationHeader(token: string) {
    this.api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }

  public async deleteAuthorizationHeader() {
    this.api.defaults.headers['Authorization'] = null
  }

  public async deleteUserToken(user: string) {
    try {
      await this.api.delete(`/user/logout/${user}`)
    } catch (error) {
      console.log(error);
    }
  }


  public async fileUpload(url: string, file: string | Blob) {
    const body = new FormData()
    body.append('file', file)

    try {
      const result = await this.api.post(url, body)
      const data = result.data
      return data

    } catch (error) {
      console.log(error);
    }
  }
}
