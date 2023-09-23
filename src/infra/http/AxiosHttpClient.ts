import { AbstractHttpClient } from "adapters/AbstractHttpClient";
import axios, { AxiosInstance } from "axios";
import { parseCookies } from "nookies";
import { LAMBDA_URL } from "services/constants";

export class AxiosHttpClient implements AbstractHttpClient<AxiosInstance> {

  public api: AxiosInstance

  public static instance: AxiosHttpClient;

  constructor(ctx?: any) {
    this.api = axios.create()

    this.api.interceptors.request.use(config => {
      return config;
    })

    const { 'nextauth.token': token } = ctx ? parseCookies(ctx) : parseCookies()

    if (token) {
      this.setAuthorizationHeader(token)
    }
  }

  static getInstance(ctx?: any): AxiosHttpClient {
    if (!this.instance || ctx) {
      this.instance = new AxiosHttpClient(ctx);
    }

    return this.instance;
  }

  get authorization() {
    return this.api.defaults.headers['Authorization']
  }

  public async getAsyncData<T>(url: string): Promise<T> {
    try {
      console.log("URL:", url)

      const config = {
        headers: {
          'Accept-Encoding': 'application/json',
        }
      }

      const result = await this.api.get(url, config)
      const data = result.data;
      return data

    } catch (error) {
      console.log(error.code);
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
      await this.api.delete(`${LAMBDA_URL}/user/logout/${user}`)
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
