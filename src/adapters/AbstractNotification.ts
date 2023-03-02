import { AppError, IAppError } from "../infra/errors/AppError";

export abstract class AbstractNotification {
  abstract hasErrors: boolean
  abstract addError(error: IAppError): void
  abstract getErrors(): AppError[]
  abstract clearErrors(): void
  abstract throwMessages(): void
}
