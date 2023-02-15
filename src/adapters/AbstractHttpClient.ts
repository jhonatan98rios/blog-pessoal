
export abstract class AbstractHttpClient<T> {

  abstract api: T
  abstract getAsyncData<T>(url: string): Promise<T>
  abstract setAuthorizationHeader(token: string): void
  abstract deleteAuthorizationHeader(): void
  abstract deleteUserToken(user: string): void
  abstract fileUpload(url: string, file: string | Blob): any
}
