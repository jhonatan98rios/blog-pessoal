export interface IAppError {
  message: string
  statusCode: number
  type?: string
}

export class AppError implements IAppError {
  public readonly message: string;
  public readonly statusCode: number;
  public readonly type?: string;

  constructor({ message, statusCode, type }: IAppError) {
    this.message = message
    this.statusCode = statusCode
    this.type = type

    console.log('AppError - type: ', type)
  }
}
